import "reflect-metadata";
import { DataSource } from "typeorm";
import { Queue } from "../entities/Queue.js";
import { Service } from "../entities/Service.js";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: process.env.SQLITE_DB || "data.sqlite",
  entities: [Queue, Service],
  synchronize: true,
  logging: false,
});

export const AppDataSourcePostgres = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST || "localhost",
  port: parseInt(process.env.PG_PORT) || 5432,
  username: process.env.PG_USER || "postgres",
  password: process.env.PG_PASSWORD || "postgres",
  database: process.env.PG_DB || "se_ii_db",
  entities: [Queue, Service],
  synchronize: true,
  logging: false,
});
