import { Resolver, Mutation, Arg } from 'type-graphql';
import { v4 } from 'uuid';

import { sendEmail } from '../utils/sendEmail';
import { User } from '../../entity/User';

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => Boolean)
  async forgotPassword(@Arg('Email') Email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email: Email } });

    if (!user) {
      return true;
    }

    const token = v4();
    await sendEmail(Email, `http://localhost:3000/user/change-password/${token}`);

    return true;
  }
}
