import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { entities } from "./src/database/entities";


dotenv.config();
const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

const dataSourceOptions: DataSourceOptions  = {
      type: "mysql",
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      logging: false,
      entities,
      migrations: ["src/database/migrations/**/*.{ts,js}"],
      subscribers: ["src/database/subscriber/**/*.{ts,js}"],
    };

export const AppDataSource = new DataSource(dataSourceOptions);
