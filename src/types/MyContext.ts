import { Request, Response } from 'express';
// import { createAuthorsLoader } from "../utils/authorsLoader";

// export interface MyContext {
//   req: Request;
//   res: Response;
//   // authorsLoader: ReturnType<typeof createAuthorsLoader>;
// }

export interface IJwtUser {
  id: number;
  role: string;
  vendorId?: number;
  email: string;
}

export interface MyContext {
  // userSession: {
  //   user: ICookieSession;
  //   nowInMinutes: number;
  // };
  // db: IDocumentStore;
  req: Request & { user?: IJwtUser };
  res: Response;
}
