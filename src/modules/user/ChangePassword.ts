import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import * as bcrypt from 'bcryptjs';

import { User } from '../../entity/User';
import { ChangePasswordInput } from './changePassword/ChangePasswordInput';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg('data')
    { token, password }: ChangePasswordInput,
    @Ctx() ctx: MyContext,
  ): Promise<User | null> {
    // const userId = await redis.get(forgotPasswordPrefix + token);
    console.log(ctx.req.user, token);
    const userId = undefined;
    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return null;
    }

    user.password = await bcrypt.hash(password, 12);
    await user.save();
    return user;
  }
}
