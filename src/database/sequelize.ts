import { Sequelize } from 'sequelize';

import { dotenv } from '../environment/env';

export const database = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: dotenv.PORT_DB,
  username: dotenv.USERNAME_DB,
  password: dotenv.PASSWORD_DB,
  database: dotenv.DATABASE
});