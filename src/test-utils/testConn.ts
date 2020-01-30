import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "mssql",
    host: "172.24.16.67",
    port: 1433,
    username: "ProductCentral",
    password: "FDk@h'g9{s",
    database: "ProductCentral",  
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "/../entity/*.*"]
  });
};
