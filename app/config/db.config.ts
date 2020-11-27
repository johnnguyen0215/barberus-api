import { Dialect } from "sequelize/types";

interface DbConfig {
  HOST: string,
  USER: string,
  PORT: number,
  PASSWORD: string,
  DB: string,
  dialect: Dialect,
  ssl: boolean,
  pool: {
    max: number,
    min: number,
    acquire: number,
    idle: number
  }
}

const dbConfig: DbConfig = {
  HOST: "ec2-52-2-82-109.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "gckeetmejwxqlo",
  PASSWORD: "80ec0ca454ba454945514fdbafffae08863f7fbbd67d496f1741d503d475d243",
  DB: "d8kkspcemvilkf",
  dialect: "postgres",
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default dbConfig;