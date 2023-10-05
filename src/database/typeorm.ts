import { DataSource } from "typeorm";

import { dotenv } from '../environment/env';

export const database = new DataSource({
  type: "mysql",
  host: "localhost",
  port: dotenv.PORT_DB,
  username: dotenv.USERNAME_DB,
  password: dotenv.PASSWORD_DB,
  database: dotenv.DATABASE,
});