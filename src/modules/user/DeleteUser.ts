import { Arg, Int, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';

@Resolver()
export class DeleteUserResolver {
  @Mutation(() => Boolean)
  async deleteUser(@Arg('Id', () => Int) Id: number) {
    await User.delete({ id: Id });
    return true;
  }
}
