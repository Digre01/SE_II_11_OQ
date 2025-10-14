import { Router } from "express";
import { getAllServices } from "../controllers/serviceController.mjs";

const router = Router();

router.get("/services", async (req, res, next) => {
  try {
    res.status(200).json(await getAllServices(req, res));
  } catch (error) {
    next(error);
  }
});

export default router;
