import "reflect-metadata";
import { DataSource } from "typeorm";
import { Queue } from "../entities/Queue.js";
import { Service } from "../entities/Service.js";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: process.env.SQLITE_DB || "data.sqlite",
  entities: [Queue],
  synchronize: true,
  logging: false,
});
