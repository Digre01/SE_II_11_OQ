import { queueRepository } from "../repositories/queueRepository.mjs";

export async function newTicket(serviceId) {
  if (!serviceName) throw new Error("serviceName mancante nel payload");
  const created = await queueRepository.enqueuePerson(serviceId);
  return created; // { id, serviceName }
}

//get services

/** this is a controller function, it should call the corresponding repo method or throw an error
 * and not an http status
 */
export async function getLastByServiceName(req, res, next) {
  try {
    const { serviceName } = req.params;
    if (!serviceName) return res.status(400).json({ error: "serviceName richiesto" });
    const customerId = await queueRepository.getLastByServiceName(serviceName);
    console.log(customerId);
    return res.json(customerId);
  } catch (err) {
    next(err);
  }
}

