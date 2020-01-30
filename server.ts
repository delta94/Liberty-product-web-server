import { ApolloServer } from 'apollo-server-express';
// import cors from 'cors';
// import * as Express from 'express';
import 'reflect-metadata';
import { createConnections } from 'typeorm';
import * as dotenv from 'dotenv';
var jwt = require('express-jwt');
var cors = require('cors');
var Express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

import { createSchema } from './src/utils/createSchema';
import { MyContext } from './src/types/MyContext';
import { User } from './src/entity/User';
import { OpenOrderData } from './src/entity/OpenOrderDataView';
import { ProductData } from './src/entity/ProductData';
import { ProductViewData } from './src/entity/ProductViewModel';
import { UserJob } from './src/entity/UserJob';
import { UserJobCategory } from './src/entity/UserJobCategory';
import { UserJobCategoryItemClass } from './src/entity/UserJobCategoryItemClass';
import { UserJobDownloadLink } from './src/entity/UserJobDownloadLink';
import { Vendor } from './src/entity/Vendor';
import { VendorCategory } from './src/entity/VendorCategory';
import { VendorCategoryItemClass } from './src/entity/VendorCategoryItemClass';
import { Xpo } from './src/entity/Xpo';
import { XpoLabel } from './src/entity/XpoLabel';
import { Sop10107 } from './src/entity/Sop10107';
import { Sop10100 } from './src/entity/Sop10100';
import { Sop10200 } from './src/entity/Sop10200';
import { Svc00700 } from './src/entity/Svc00700';
import { Svc00701 } from './src/entity/Svc00701';
import { Svc00712 } from './src/entity/Svc00712';
import { Svc00731 } from './src/entity/Svc00731';
import { ItemDataReporting } from './src/entity/SalesPresentation/ItemDataReporting';
import { ItemPriceListDataGroupingsWithKings } from './src/entity/SalesPresentation/ItemPriceListDataGroupingsWithKings';
import { CustomerData } from './src/entity/CustomerData';
import { SalesPresentation } from './src/entity/SalesPresentation/SalesPresentation';
import { SalesPresentationItemClass } from './src/entity/SalesPresentation/SalesPresentationItemClass';
import { SalesPresentationItemClassItemNumber } from './src/entity/SalesPresentation/SalesPresentationItemClassItemNumber';
import { SalesPresentationPriceLevel } from './src/entity/SalesPresentation/SalesPresentationPriceLevel';
import { ItemKitDetail } from './src/entity/SalesPresentation/ItemKitDetail';
import { ItemKitGrouping } from './src/entity/SalesPresentation/ItemKitGrouping';
import { SalesPresentationItemClassKit } from './src/entity/SalesPresentation/SalesPresentationItemClassKit';
import { SalesPresentationItemClassGroup } from './src/entity/SalesPresentation/SalesPresentationItemClassGroup';
import { SalesPresentationItemClassImage } from './src/entity/SalesPresentation/SalesPresentationItemClassImage';
import { ItemClassData } from './src/entity/SalesPresentation/ItemClassData';
import { UserRole } from './src/entity/UserRole';
import { InTransitWithCubes } from './src/entity/Support/InTransitWithCubes';

(async () => {
  const env = process.env.NODE_ENV === 'development' ? `/.env` : `./.env`;
  console.log('env', env);
  dotenv.config();
  console.log('__dirname', __dirname);
  console.log(`path.join(__dirname + 'web')`, path.join(__dirname + 'web'));

  const twoConnections: any[] = [
    {
      name: 'LFI',
      type: 'mssql',

      // host: 'TEST-1',
      // port: 1433,
      // username: 'ProductCentral',
      // password: 'FDk@h’g9{s',
      // database: 'ProductCentral',

      host: 'TEST-3',
      port: 1433,
      username: 'ProductCentral',
      password: `FDk@h'g9{s`,
      database: 'LFI',

      synchronize: false,
      logging: false,
      entities: [
        OpenOrderData,
        ProductData,
        ProductViewData,
        User,
        UserJob,
        UserRole,
        UserJobCategory,
        UserJobCategoryItemClass,
        UserJobDownloadLink,
        Vendor,
        VendorCategory,
        VendorCategoryItemClass,
        Xpo,
        XpoLabel,
        Svc00700,
        Sop10107,
        Sop10100,
        Sop10200,
        Svc00701,
        Svc00712,
        Svc00731,
        ItemDataReporting,
        ItemPriceListDataGroupingsWithKings,
        CustomerData,
        ItemKitDetail,
        ItemKitGrouping,
        ItemClassData,
        InTransitWithCubes,
      ],
    },
    {
      name: 'default',
      type: 'mssql',

      // host: 'TEST-1',
      // port: 1433,
      // username: 'ProductCentral',
      // password: 'FDk@h’g9{s',
      // database: 'ProductCentral',

      host: '172.24.16.67',
      port: 1433,
      username: 'ProductCentral',
      password: `FDk@h'g9{s`,
      database: 'ProductCentral',

      synchronize: false,
      logging: false,
      entities: [
        ProductData,
        ProductViewData,
        User,
        UserRole,
        UserJob,
        UserJobCategory,
        UserJobCategoryItemClass,
        UserJobDownloadLink,
        Vendor,
        VendorCategory,
        VendorCategoryItemClass,
        SalesPresentation,
        SalesPresentationPriceLevel,
        SalesPresentationItemClass,
        SalesPresentationItemClassItemNumber,
        SalesPresentationItemClassKit,
        SalesPresentationItemClassGroup,
        SalesPresentationItemClassImage,
      ],
    },
  ];

  console.log('twoConnections', twoConnections);
  await createConnections(twoConnections);

  // await createConnection({
  //   name: 'default',
  //   type: 'mssql',

  //   // host: 'TEST-1',
  //   // port: 1433,
  //   // username: 'ProductCentral',
  //   // password: 'FDk@h’g9{s',
  //   // database: 'ProductCentral',

  //   host: '172.24.16.67',
  //   port: 1433,
  //   username: 'ProductCentral',
  //   password: `FDk@h'g9{s`,
  //   database: 'ProductCentral',

  //   synchronize: false,
  //   logging: false,
  //   entities: [
  //     OpenOrderData,
  //     ProductData,
  //     ProductViewData,
  //     User,
  //     UserJob,
  //     UserJobCategory,
  //     UserJobCategoryItemClass,
  //     UserJobDownloadLink,
  //     Vendor,
  //     VendorCategory,
  //     VendorCategoryItemClass,
  //     Xpo,
  //     XpoLabel,
  //     Sop10107,
  //   ],
  // });

  const schema = await createSchema();

  const app = Express();

  app.use(
    cors({
      origin: ['http://productcentral.mylibertyfurn.com', 'http://localhost:3000'],
      credentials: true,
    })
  );

  app.use(
    jwt({
      credentialsRequired: false,
      secret: process.env.JWT_SECRET_KEY!,
      getToken: (req: any) => {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
        }
        return undefined;
      },
    })
  );

  // swallow the JWT Expired Exception
  // @ts-ignore
  app.use((err: any, req: MyContext, res: Response, next: any) => {
    next();
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: MyContext) => ({
      req,
      res,
      // authorsLoader: createAuthorsLoader()
    }),
    validationRules: [
      // queryComplexity({
      //   // The maximum allowed query complexity, queries above this threshold will be rejected
      //   maximumComplexity: 8,
      //   // The query variables. This is needed because the variables are not available
      //   // in the visitor of the graphql-js library
      //   variables: {},
      //   // Optional callback function to retrieve the determined query complexity
      //   // Will be invoked weather the query is rejected or not
      //   // This can be used for logging or to implement rate limiting
      //   onComplete: (complexity: number) => {
      //     console.log("Query Complexity:", complexity);
      //   },
      //   estimators: [
      //     // Using fieldConfigEstimator is mandatory to make it work with type-graphql
      //     fieldConfigEstimator(),
      //     // This will assign each field a complexity of 1 if no other estimator
      //     // returned a value. We can define the default value for field not explicitly annotated
      //     simpleEstimator({
      //       defaultComplexity: 1
      //     })
      //   ]
      // }) as any
    ],
    introspection: true,
  });

  apolloServer.applyMiddleware({ app, cors: false });

  // io.on('connection', (socket: any) => {
  //   socket.on('hello', () => {
  //     console.log('hello world from socket.io');
  //   });

  //   socket.on('hello', () => {
  //     console.log('hello world from socket.io');
  //   });
  // });

  // const htmlFile = path.join(__dirname, 'web', 'index.html');

  if (process.env.NODE_ENV === 'production') {
    app.use(Express.static(path.join(__dirname, 'web')));
    // app.use(bodyParser.json());

    app.get('/ping', function(_req: any, res: any) {
      return res.send('pong');
    });

    app.get('*', function(_req: any, res: any) {
      res.sendFile('index.html', { root: __dirname + 'web' });
    });
  }

  app.listen(process.env.PORT || 4000, () => {
    console.log(`server started on http://localhost:${process.env.PORT || 4000}/graphql`);
  });
})();
