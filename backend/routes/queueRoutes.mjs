import { Router } from "express";
import {
  newTicket
} from "../controllers/queueController.mjs";

const router = Router({ mergeParams: true });

// Create a new ticket
router.post("", async (req, res, next) => {
  try{
    const ticket = await newTicket(req.body);
    res.status(201).json(ticket);
  }catch(error){
    next(error);
  }
});

export default router;
