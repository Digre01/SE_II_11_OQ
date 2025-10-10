import express from "express";
import cors from "cors";
import clientRouter from "./routes/clientRoute.js";
import { initializeDatabase } from "./database/connection.js";

const app = express();
app.use(cors());
app.use(express.json());

await initializeDatabase();

app.use("/api/clients", clientRouter);

export default app;
