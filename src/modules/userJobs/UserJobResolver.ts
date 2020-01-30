import { Arg, Int, Mutation, Query, Resolver, Ctx } from 'type-graphql';
import { UserJob } from '../../entity/UserJob';
import { UrlResponse } from '../../entity/UrlResponse';
import { UserJobInput } from '../../entity/UserJobInput';
import { UserJobCategory } from '../../entity/UserJobCategory';
import { UserJobCategoryItemClass } from '../../entity/UserJobCategoryItemClass';
import { MyContext } from '../../types/MyContext';
import { Not, In, getConnection } from 'typeorm';
import { find, filter } from 'lodash';
import { ProductData } from '../../entity/ProductData';
import { jsonToCsvFile, zipFiles } from '../../utils/fileOperations';
import { v4 } from 'uuid';
import { UserJobStatusEnum } from '../../entity/Enums';
import { UserJobDownloadLinkInput } from '../../entity/UserJobDownloadLinkInput';
import { UserJobDownloadLink } from '../../entity/UserJobDownloadLink';

async function addCategories(userJob: UserJobInput) {
  try {
    let itemsToInsert: UserJobCategoryItemClass[] = [];
    if (userJob.userJobCategories && userJob.userJobCategories.length > 0) {
      const data = await UserJobCategory.find({
        userJobId: userJob.id,
        category: Not(In(userJob.userJobCategories.reduce((prev, current) => prev.concat([current.category!]), new Array<String>()))),
      });
      for (let cat of data) {
        await UserJobCategoryItemClass.delete({ userJobCategoryId: cat.id });
        await UserJobCategory.delete({ id: cat.id });
      }

      for (let userJobCategoriesInput of userJob.userJobCategories) {
        const userJobCategory = await UserJobCategory.findOne({ userJobId: userJob.id, category: userJobCategoriesInput.category });
        if (!userJobCategory) {
          try {
            const newOne = {
              userJobId: userJob.id,
              category: userJobCategoriesInput.category,
              filePath: undefined,
              downloaded: false,
              available: undefined,
            };

            const newCategory = await UserJobCategory.create(newOne).save();

            if (userJobCategoriesInput.userJobCategoryItemClasses && userJobCategoriesInput.userJobCategoryItemClasses.length > 0) {
              for (let ic of userJobCategoriesInput.userJobCategoryItemClasses) {
                itemsToInsert.push(
                  Object.assign(new UserJobCategoryItemClass(), {
                    userJobId: userJobCategoriesInput.userJobId,
                    userJobCategoryId: newCategory.id!,
                    itemClass: ic.itemClass,
                    itemClassDescription: ic.itemClassDescription,
                  })
                );
              }
            }
          } catch (ex) {
            console.log('ex', ex.message);
          }
        } else {
          try {
            await UserJobCategoryItemClass.delete({ userJobCategoryId: userJobCategoriesInput.id });
          } catch (ex) {
            console.log('ex.message', ex.message);
          }
          if (userJobCategoriesInput.userJobCategoryItemClasses && userJobCategoriesInput.userJobCategoryItemClasses.length > 0) {
            for (let ic of userJobCategoriesInput.userJobCategoryItemClasses) {
              itemsToInsert.push(
                Object.assign(new UserJobCategoryItemClass(), {
                  userJobId: userJobCategoriesInput.userJobId,
                  userJobCategoryId: userJobCategory.id,
                  itemClass: ic.itemClass,
                  itemClassDescription: ic.itemClassDescription,
                })
              );
            }
          }
        }
      }

      if (itemsToInsert.length > 0) {
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(UserJobCategoryItemClass)
          .values(itemsToInsert)
          .execute();
      }
    }
  } catch (ex) {
    console.log('ex', ex);
  }
}

function getCategoryName(category: string): string | undefined {
  switch (category) {
    case 'BR':
      return '-Bedroom';
    case 'CD':
      return '-Dining';
    case 'ENT':
      return '-Entertainment';
    case 'HO':
      return '-Home Office';
    case 'OT':
      return '-Occasional';
    case 'YBR':
      return '-Youth';
    case 'AC':
      return '-Accents';
    default:
      return undefined;
  }
}
@Resolver()
export class UserJobResolver {
  @Mutation(() => UserJob)
  async saveUserJob(@Arg('data') data: UserJobInput, @Ctx() ctx: MyContext) {
    try {
      console.log('saveUserJob', data);
      let userJob: UserJob | undefined;
      const { user } = ctx.req;
      if (!user) {
        throw new Error('Please Log In.');
      }

      try {
        if (data.id) {
          userJob = await UserJob.findOne({ id: data.id });
          if (userJob) {
            const { userJobCategories, ...rest } = data;
            userJob = Object.assign(userJob, { ...rest });
            await userJob.save();
            await addCategories({ userJobCategories, ...rest });
          } else {
            // Do something?
          }
        } else {
          const where = { userId: user.id, status: UserJobStatusEnum.InProgress };
          userJob = await UserJob.findOne(where, { relations: ['userJobCategories'] });
          if (!userJob) {
            userJob = await UserJob.create({
              userId: ctx.req.user!.id,
              vendorId: ctx.req.user!.vendorId,
              fileType: data.fileType,
              inProgress: true,
              status: UserJobStatusEnum.InProgress,
              uuid: v4(),
            }).save();
          }
          await addCategories(userJob);
        }
      } catch (ex) {
        console.log('saveUserJob > ex', ex.message);
      }

      if (data.status === UserJobStatusEnum.WizardCompleted && data.fileType === 'Images Only') {
        var spawn = require('child_process').spawn;

        // let job = spawn('node', [__dirname + '../../../zip.js', userJob!.id, user.email], {
        let job = spawn('ts-node', ['../../zip.ts', userJob!.id, user.email], {
          detached: false, //if not detached and your main process dies, the child will be killed too
          stdio: [process.stdin, process.stdout, process.stderr], //those can be file streams for logs or wathever
        });

        job.on('close', function(_code: any) {
          job = null;

          //send socket information about the job ending
        });
      }

      console.log('about to return from saveUserJob');
      return UserJob.findOne({ id: userJob!.id }, { relations: ['userJobCategories'] });
    } catch (ex) {
      console.log('outer > ex', ex.message);
      throw ex;
    }
  }

  @Mutation(() => Boolean)
  async deleteUserJob(@Arg('id', () => Int) id: number): Promise<Boolean> {
    await UserJobCategoryItemClass.delete({ userJobId: id });
    await UserJobCategory.delete({ userJobId: id });
    await UserJobDownloadLink.delete({ userJobId: id });
    await UserJob.delete({ id });
    return true;
  }

  async deleteAllUserJobsByUserId(@Arg('id, () => number') id: number) {
    const ujs = await UserJob.find({ where: { userId: id }, select: ['id'] });
    if (ujs.length > 0) {
      const ids = ujs.reduce((prev, current) => prev.concat([current.id!]), new Array<number>());
      await UserJobCategoryItemClass.delete({ userJobId: In([...ids]) });
      await UserJobCategory.delete({ userJobId: In([...ids]) });
      await UserJob.delete({ id: In([...ids]) });
    }
    return true;
  }

  @Query(() => [UserJob])
  async UserJobs() {
    return UserJob.find();
  }

  @Query(() => UserJob)
  async getUserJob(@Arg('UserJobId', () => Int) id: number) {
    return UserJob.findOne({ id }, { relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'] });
  }

  @Query(() => [UserJob])
  async getUserJobsForUser(@Ctx() ctx: MyContext) {
    let jobs: UserJob[];
    if (ctx.req.user) {
      jobs = await UserJob.find({
        where: { userId: ctx.req.user!.id },
        relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
      });
    } else {
      throw new Error('Please Log In.');
    }

    return jobs;
  }

  @Query(() => UserJob)
  async getUserJobForUserInProgress(@Ctx() ctx: MyContext) {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        { userId: ctx.req.user!.id, inProgress: true, status: UserJobStatusEnum.InProgress },
        { relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'], order: { id: 'DESC' } }
      );
      if (!job) throw new Error('User Job Not Found.');
    } else {
      throw new Error('Please Log In.');
    }

    return job;
  }

  @Query(() => UserJob)
  async getUserJobForUserWizardCompleted(@Ctx() ctx: MyContext): Promise<UserJob> {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        {
          userId: ctx.req.user!.id,
          status: UserJobStatusEnum.WizardCompleted,
        },
        {
          relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
          order: { id: 'DESC' },
        }
      );
      if (!job) throw new Error('User Job Not Found.');
    } else {
      throw new Error('Please Log In.');
    }

    return job;
  }

  @Query(() => [ProductData])
  async productDataByCategoryForUserJob(@Arg('category', () => String) category: string, @Ctx() ctx: MyContext) {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        {
          userId: ctx.req.user!.id,
          status: UserJobStatusEnum.WizardCompleted,
        },
        {
          relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
          order: { id: 'DESC' },
        }
      );
      if (!job) {
        throw new Error('User Job Not Found.');
      }
    } else {
      throw new Error('Please Log In.');
    }

    const userJobCategory = find(job.userJobCategories, uc => uc.category == category);
    if (!userJobCategory) throw new Error('Your Selections were not found. Please start over.');
    const itemClasses: String[] = userJobCategory.userJobCategoryItemClasses.reduce((prev, current) => prev.concat([current.itemClass]), new Array<String>());
    return ProductData.find({ category, itemClass: In([...itemClasses]) });
  }

  @Mutation(() => UrlResponse)
  async getProductDataByCategoryFileUrl(@Arg('category', () => String) category: string, @Ctx() ctx: MyContext) {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        {
          userId: ctx.req.user!.id,
          status: UserJobStatusEnum.WizardCompleted,
        },
        {
          relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
          order: { id: 'DESC' },
        }
      );
      if (!job) {
        throw new Error('User Job Not Found.');
      }
    } else {
      throw new Error('Please Log In.');
    }

    const userJobCategory = find(job.userJobCategories, uc => uc.category == category);
    if (!userJobCategory) throw new Error('Your Selections were not found. Please start over.');
    const itemClasses: String[] = userJobCategory.userJobCategoryItemClasses.reduce((prev, current) => prev.concat([current.itemClass]), new Array<String>());
    const productDataToCsv = await ProductData.find({ category, itemClass: In([...itemClasses]) });

    try {
      const fileName = `LibertyFurniture${getCategoryName(category)}.csv`;
      const result = await jsonToCsvFile(productDataToCsv, `${process.env.USER_JOB_EXPORT_BASE_PATH}${job.uuid}`, fileName);
      if (result) {
        const url = `${process.env.PROTOCOL}://${process.env.DOMAIN}/${process.env.BASE_WEB_URL}/${job.uuid}/${fileName}`;
        userJobCategory.filePath = url;
        userJobCategory.save();
        return { url };
      } else throw new Error('Unable to Generate CSV Export.');
    } catch (ex) {
      throw new Error('Unable to generate Download Link');
    }
  }

  @Query(() => UrlResponse)
  async getProductDataFileUrl(@Ctx() ctx: MyContext) {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        {
          userId: ctx.req.user!.id,
          status: UserJobStatusEnum.WizardCompleted,
        },
        {
          relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
          order: { id: 'DESC' },
        }
      );
      if (!job) {
        throw new Error('User Job Not Found.');
      }
    } else {
      throw new Error('Please Log In.');
    }

    const itemClasses: string[] = job.userJobCategories!.reduce(
      (prev, current) =>
        prev.concat([
          ...(current.userJobCategoryItemClasses
            ? current.userJobCategoryItemClasses!.reduce((prev, current) => prev.concat(current.itemClass), new Array<string>())
            : []),
        ]),
      new Array<string>()
    );

    let whereClause: any = {
      category: In([...job.userJobCategories.reduce((prev, current) => prev.concat(current.category), new Array<string>())]),
      status: In(['Current', 'Review', 'Phase Out', 'New Intro2']),
    };

    if (itemClasses.length) {
      whereClause.itemClass = In([...itemClasses]);
    }

    const productDataToCsv = await ProductData.find({
      where: whereClause,
      order: {
        category: 'ASC',
        itemClass: 'ASC',
      },
    });

    try {
      const fileName = `Liberty Furniture Product Data.csv`;
      const result = await jsonToCsvFile(productDataToCsv, `${process.env.USER_JOB_EXPORT_BASE_PATH}${job.uuid}`, fileName);
      if (result) {
        const url = `${process.env.PROTOCOL}://${process.env.DOMAIN}/${process.env.BASE_WEB_URL}/${job.uuid}/${fileName}`;
        await UserJob.update({ userId: ctx.req.user.id }, { inProgress: false });
        // await this.deleteAllUserJobsByUserId(ctx.req.user.id);
        return { url };
      } else throw new Error('Unable to Generate CSV Export.');
    } catch (ex) {
      console.log('ex', ex);
      throw new Error('Unable to generate Download Link');
    }
  }

  @Mutation(() => UrlResponse)
  async getProductDataZipUrl(@Ctx() ctx: MyContext) {
    let job: UserJob | undefined = undefined;
    if (ctx.req.user) {
      job = await UserJob.findOne(
        {
          userId: ctx.req.user!.id,
          status: UserJobStatusEnum.WizardCompleted,
        },
        {
          relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'],
          order: { id: 'DESC' },
        }
      );
      if (!job) {
        throw new Error('User Job Not Found.');
      }
    } else {
      throw new Error('Please Log In.');
    }

    const itemClasses: string[] = job.userJobCategories!.reduce(
      (prev, current) =>
        prev.concat([
          ...(current.userJobCategoryItemClasses
            ? current.userJobCategoryItemClasses!.reduce((prev, current) => prev.concat(current.itemClass), new Array<string>())
            : []),
        ]),
      new Array<string>()
    );

    const allProductDataToCsv = await ProductData.find({
      category: In([job.userJobCategories.reduce((prev, current) => prev.concat(current.category), new Array<string>())]),
      itemClass: In([...itemClasses]),
    });

    let physicalFiles: string[] = [];
    const baseDirectory = `${process.env.USER_JOB_EXPORT_BASE_PATH}${job.uuid}/`;
    for (let category of job.userJobCategories) {
      try {
        const productDataToCsv = filter(allProductDataToCsv, pd => pd.category === category.category);
        if (productDataToCsv) {
          const fileName = `LibertyFurniture${getCategoryName(category.category)}.csv`;
          const result = await jsonToCsvFile(productDataToCsv, baseDirectory, fileName);
          if (result) {
            const url = `${process.env.PROTOCOL}://${process.env.DOMAIN}/${process.env.BASE_WEB_URL}/${job.uuid}/${fileName}`;
            category.filePath = url;
            category.save();
            physicalFiles.push(result);
          } // Just pass if we don't have a file
        }
      } catch (ex) {
        throw new Error('Unable to generate Download Link');
      }
    }
    const zipFileName = 'Liberty Furniture Product Data.zip';
    await zipFiles(baseDirectory, zipFileName);
    const url = `${process.env.PROTOCOL}://${process.env.DOMAIN}/${process.env.BASE_WEB_URL}/${job.uuid}/${zipFileName}`;
    return { url: url };
  }

  @Mutation(() => UserJobDownloadLink)
  async saveUserJobDownloadLink(@Arg('data', () => UserJobDownloadLinkInput) data: UserJobDownloadLinkInput): Promise<UserJobDownloadLink | undefined> {
    let link = Object.assign(new UserJobDownloadLink(), { ...data });
    const id = await link.save();
    return UserJobDownloadLink.findOne({ where: { id: id.id } });
  }

  @Mutation(() => Boolean)
  async deleteUserJobDownloadLinkByUserJobId(@Arg('id', () => Int) id: number): Promise<Boolean> {
    await UserJobDownloadLink.delete({ userJobId: id });
    return true;
  }
}
