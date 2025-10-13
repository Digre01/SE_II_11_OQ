import { Router } from "express";
import {
  //newTicket,
  getLastByServiceName
} from "../controllers/queueController.mjs";

const router = Router();

// Create a new ticket
// To do 


// GET /api/v1/tickets/:serviceName
router.get("/:serviceName", getLastByServiceName);


export default router;
