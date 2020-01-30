import { Resolver, Mutation, Arg } from 'type-graphql';

import { User } from '../../entity/User';

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg('token') token: string): Promise<boolean> {
    // const userId = await redis.get(confirmUserPrefix + token);
    console.log(token);
    const userId = undefined;
    if (!userId) {
      return false;
    }

    await User.update({ id: parseInt(userId, 10) }, { active: true });

    return true;
  }
}
