import { Resolver, Query, Ctx } from 'type-graphql';

import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { MeUser } from '../../entity/MeUser';

@Resolver()
export class MeResolver {
  @Query(() => MeUser, { nullable: true, complexity: 5 })
  async me(@Ctx() ctx: MyContext): Promise<MeUser | undefined> {
    if (!ctx.req.user) {
      throw new Error('Please Log In.');
    }

    const user = await User.findOne(ctx.req.user!.id, { relations: ['userRoles'] });
    if (user) {
      const { userRoles, id, firstName, lastName, email } = user;
      const me = {
        id,
        firstName,
        lastName,
        email,
        userRoles: userRoles.reduce((p, c) => p.concat([c.role]), new Array<string>()),
      };
      return me;
    } else return undefined;
  }

  @Query(() => User, { nullable: true, complexity: 5 })
  async getMe(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.user) {
      throw new Error('Please Log In.');
    }

    return User.findOne(ctx.req.user!.id, { relations: ['vendor', 'userRoles'] });
  }
}
