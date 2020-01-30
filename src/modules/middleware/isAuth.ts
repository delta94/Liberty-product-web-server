import { MiddlewareFn } from 'type-graphql';

import { MyContext } from '../../types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.user!.id) {
    throw new Error('not authenticated');
  }

  return next();
};
