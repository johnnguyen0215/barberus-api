import { Dialect } from "sequelize/types";

interface DbConfig {
  HOST: string,
  USER: string,
  PORT: number,
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
  PORT: 5432,
  USER: "barberus-dev",
  PASSWORD: "abc123",
  DB: "barberusdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default dbConfig;