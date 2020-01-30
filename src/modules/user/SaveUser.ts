import { Mutation, Arg, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { UserInput } from '../../entity/UserInput';
import { UserRole } from '../../entity/UserRole';
// import bcrypt from 'bcryptjs';

// export const CreateUserResolver = createResolver('User', User, UserInput, User);

@Resolver()
export class SaveUserResolver {
  @Mutation(() => User)
  async saveUser(@Arg('data') data: UserInput) {
    let user: any;
    if (data.id) {
      user = await User.findOneOrFail({ id: data.id });
      const { password, vendorId, roles, ...rest } = data;
      user = Object.assign(user, rest);
      if (data.password && data.password.trim().length > 0) {
        user.password = data.password;
      }
      if (data.vendorId && data.vendorId > 0) {
        user.vendorId = data.vendorId;
      }
      await UserRole.delete({ userId: user.id });
      for (let role of roles) {
        await UserRole.insert({
          userId: user.id,
          role,
        });
      }
      user.save();
    } else {
      const { vendorId, roles, ...rest } = data;
      user = await User.create({ ...rest, vendorId: vendorId && vendorId > 0 ? vendorId : undefined }).save();
      for (let role of roles) {
        await UserRole.insert({
          userId: user.id,
          role,
        });
      }
    }
    return user;
  }
}
