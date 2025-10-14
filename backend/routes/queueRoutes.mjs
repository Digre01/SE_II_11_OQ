import { Router } from "express";
import { createTicket, nextCustomerByServiceId } from "../controllers/queueController.mjs";

const router = Router();

// POST /api/v1/tickets
router.post('/tickets', async (req, res, next) => {
  try {
    const { serviceId } = req.body;
    if (!serviceId) {
      return res.status(400).json({ error: "serviceId is required" });
    }
    res.status(201).json(await createTicket(serviceId));
  } catch (error) {
    next(error);
  }
});

// TODO: endpoint per nextCustomerByServiceId

export default router;
