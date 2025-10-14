
import express from "express";
import { getAllServices } from "../controllers/serviceController.mjs";

const router = express.Router();

router.get("/services", getAllServices);

export default router;
