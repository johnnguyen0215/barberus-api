import { Sequelize } from 'sequelize';

import dbConfig from '../config/db.config';

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false
    }
  },
  pool: dbConfig.pool,
  ssl: dbConfig.ssl,
});
