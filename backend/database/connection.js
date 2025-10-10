import { DataSource } from "typeorm";
import { Client } from "../entities/Queue.js";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [Client],
  synchronize: true,
  logging: false
});

export async function initializeDatabase() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("Successfully connected to DB");
  }
}

export async function closeDatabase() {
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log("Database connection closed.");
    }
  } catch (error) {
    console.log("Error while closing database:", error);
  }
}

