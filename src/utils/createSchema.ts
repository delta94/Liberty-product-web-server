import { buildSchema } from 'type-graphql';
// import { AuthorBookResolver } from "../modules/author-book/AuthorBookResolver";
import { ChangePasswordResolver } from '../modules/user/ChangePassword';
import { ConfirmUserResolver } from '../modules/user/ConfirmUser';
import { SaveUserResolver } from '../modules/user/SaveUser';
import { ForgotPasswordResolver } from '../modules/user/ForgotPassword';
import { LoginResolver } from '../modules/user/Login';
import { LogoutResolver } from '../modules/user/Logout';
import { MeResolver } from '../modules/user/Me';
import { RegisterResolver } from '../modules/user/Register';
import { VendorResolver } from '../modules/vendors/VendorResolver';
import { DeleteUserResolver } from '../modules/user/DeleteUser';
import { UsersResolver } from '../modules/user/Users';
import { VendorCategoryResolver } from '../modules/vendors/VendorCategoryResolver';
import { VendorCategoryItemClassResolver } from '../modules/vendors/VendorCategoryItemClassResolver';
import { ProductResolver } from '../modules/products/ProductResolver';
import { UserByIdResolver } from '../modules/user/UserById';
import { UserJobResolver } from '../modules/userJobs/UserJobResolver';
import { XpoResolver } from '../modules/xpo/XpoResolver';
import { SalesPresentationResolver } from '../modules/salesPresentations/SalesPresentationResolver';
import { ItemResolver } from '../modules/salesPresentations/ItemResolver';
import { SupportResolver } from '../modules/support/SupportResolver';

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ChangePasswordResolver,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      LoginResolver,
      LogoutResolver,
      MeResolver,
      RegisterResolver,
      SaveUserResolver,
      DeleteUserResolver,
      UsersResolver,
      UserByIdResolver,
      VendorResolver,
      VendorCategoryResolver,
      VendorCategoryItemClassResolver,
      ProductResolver,
      UserJobResolver,
      XpoResolver,
      SalesPresentationResolver,
      ItemResolver,
      SupportResolver,
      // AuthorBookResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });
