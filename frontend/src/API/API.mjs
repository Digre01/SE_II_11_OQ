import { Ticket } from "../models/models.mjs"

const SERVER_URL = "http://localhost:3001";

/* Tickets */
// POST /api/tickets
const newTicket = async(serviceId) => {
  const response = await fetch(SERVER_URL + '/api/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ serviceId }),
    //credentials: 'include'    da aggiungere quando implementeremo il login
  });
  if(response.ok) {
    const ticket_json = await response.json();
    const ticket = new Ticket(ticket_json.id, ticket_json.listCode);
    return ticket;
  }
  else {
    const errDetails = await response.text();
    throw errDetails;
  }
}

const API = { newTicket };
export default API;