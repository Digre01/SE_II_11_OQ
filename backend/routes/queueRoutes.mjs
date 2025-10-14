import { Router } from "express";
import {
  newTicket,
  getLastByServiceName,
} from "../controllers/queueController.mjs";

const router = Router();

router.post('/tickets', async (req, res, next) => {
  try {
    const serviceId = req.body.serviceId;
    res.status(200).json(await newTicket(serviceId));
  } catch (error) {
    next(error);
  }
});

/** get /services */


// this route should call the controller function
//router.get("/:serviceName");


export default router;
