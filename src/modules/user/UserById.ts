import { Query, Resolver, Arg, Int } from 'type-graphql';
import { User } from '../../entity/User';
import { GetUserWithRoles } from '../../entity/GetUserWithRoles';

@Resolver()
export class UserByIdResolver {
  @Query(() => GetUserWithRoles)
  async userById(@Arg('id', () => Int!) id: number): Promise<GetUserWithRoles | undefined> {
    const user = await User.findOne({ id: id }, { relations: ['vendor', 'userRoles'] });
    if (user) {
      const { userRoles, ...rest } = user;
      const result = {
        ...rest,
        userRoles: userRoles.reduce((p, c) => p.concat([c.role]), new Array<string>()),
      };
      return result;
    } else return undefined;
  }
}
