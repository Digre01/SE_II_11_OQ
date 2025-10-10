import { Router } from "express";
import { getTicket } from "../controllers/queueController.js";

const router = Router();

router.post("/", getTicket);

export default router;
