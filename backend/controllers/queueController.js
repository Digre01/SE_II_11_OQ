import { AppDataSource } from "../database/connection.js";
import { Queue } from "../entities/Queue.js";

export async function getTicket(req, res, next) {
  try {
    const { name, email } = req.body;
    
    const repo = AppDataSource.getRepository(Queue);
    const existing = await repo.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "email already exists" });
    }

    const client = repo.create({ name, email });
    const saved = await repo.save(client);
    return res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
}
