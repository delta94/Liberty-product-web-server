import { Resolver, Mutation, Ctx } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { UserJob } from '../../entity/UserJob';
import { UserJobResolver } from '../userJobs/UserJobResolver';

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
    const { user } = ctx.req;
    if (user) {
      const userJobs = await UserJob.find({ where: { userId: user.id } });
      if (userJobs.length > 0) {
        const userJobResolver = new UserJobResolver();
        for (let uj of userJobs) {
          await userJobResolver.deleteUserJob(uj.id!);
        }
      }
    }
    return true;
  }
}
