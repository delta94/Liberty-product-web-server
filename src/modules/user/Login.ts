// import bcrypt from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { LoginResponse } from '../../entity/LoginResponse';
import * as jwt from 'jsonwebtoken';

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginResponse, { nullable: true })
  async login(@Arg('email') Email: string, @Arg('password') Password: string): Promise<LoginResponse | null> {
    const user = await User.findOne({ where: { email: Email }, relations: ['userRoles'] });

    if (!user) {
      throw new Error('Email and/or Password is invalid.');
    }

    const valid = Password === user.password;
    // const valid = await bcrypt.compare(Password, user.Password);

    if (!valid) {
      throw new Error('Email and/or Password is invalid.');
    }

    if (!user.active) {
      throw new Error('Email and/or Password is invalid.');
    }

    const token = jwt.sign(
      { id: user.id, roles: user.userRoles.reduce((p, c) => p.concat([c.role]), new Array<string>()), vendorId: user.vendorId, email: user.email },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: '18h',
      }
    );

    // // Add this for any Restful API Call
    // req['user'] = {
    //   id: user.id,
    //   roles: user.roles,
    // };

    // ctx.req.userId = user.Id;

    // return user;

    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userRoles: user.userRoles.reduce((p, c) => p.concat([c.role]), new Array<string>()),
      },
      token,
    };
  }
}
