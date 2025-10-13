import { queueRepository } from "../repositories/queueRepository.mjs";


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

/*

export async function newTicket(serviceObj) {
  // Restituisce un ticket fittizio per test (biosognerà implementare la logica nella repository)
  const fakeTicket = {
    id: 25,
    listCode: 'A' + 25
  };
  return fakeTicket;

}

export async function newTicket({ serviceName }) {
  if (!serviceName) throw new Error("serviceName mancante nel payload");
  const created = await queueRepository.enqueuePerson(serviceName);
  return created; // { id, serviceName }
}

*/