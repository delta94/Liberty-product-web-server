import { Query, Resolver, Arg, Int } from 'type-graphql';
import { User } from '../../entity/User';
import { UsersResponse } from '../../entity/UsersResponse';

@Resolver()
export class UsersResolver {
  @Query(() => UsersResponse)
  async users(
    @Arg('skip', () => Int!) skip: number,
    @Arg('pageSize', () => Int!) pageSize: number,
    @Arg('searchText', () => String, { nullable: true }) _searchText?: number
  ): Promise<UsersResponse> {
    return {
      users: await User.find({ skip, take: pageSize, relations: ['vendor', 'userRoles'] }),
      totalRows: await User.count(),
    };
  }
}
