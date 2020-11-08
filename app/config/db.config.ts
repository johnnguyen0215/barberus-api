import { Dialect } from "sequelize/types";

interface DbConfig {
  HOST: string,
  USER: string,
  PASSWORD: string,
  DB: string,
  dialect: Dialect,
  pool: {
    max: number,
    min: number,
    acquire: number,
    idle: number
  }
}

const dbConfig: DbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default dbConfig;