import dotenv from "dotenv";
import { AppDataSource, AppDataSourcePostgres } from "./config/data-source.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSourcePostgres.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("Error in db connection: ", err));