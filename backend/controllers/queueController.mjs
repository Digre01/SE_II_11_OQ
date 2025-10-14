import { queueRepository } from "../repositories/queueRepository.mjs";

export async function createTicket(serviceId) {
  if (!serviceId) throw new Error("serviceId is required");
  const ticket = await queueRepository.createTicket(serviceId);
  return ticket;
}

// TODO
export async function nextCustomerByServiceId(serviceId) {
	
}

// PRECEDENTLY WRITTEN, TO MODIFY
/* this is a controller function, it should call the corresponding repo method or throw an error
 and not an http status

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
*/