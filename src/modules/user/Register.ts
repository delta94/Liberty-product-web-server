import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql';
import * as bcrypt from 'bcryptjs';

import { User } from '../../entity/User';
import { isAuth } from '../middleware/isAuth';
import { logger } from '../middleware/logger';
import { sendEmail } from '../utils/sendEmail';
import { createConfirmationUrl } from '../utils/createConfirmationUrl';
import { UserInput } from '../../entity/UserInput';

@Resolver()
export class RegisterResolver {
  @UseMiddleware(isAuth, logger)
  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }

  @Mutation(() => User)
  async register(
    @Arg('data')
    { email, firstName, lastName, password, active }: UserInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      active: active,
      created: new Date(),
    }).save();

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}
