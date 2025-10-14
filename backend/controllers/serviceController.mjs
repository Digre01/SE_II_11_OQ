
import { serviceRepository } from "../repositories/serviceRepository.mjs";

export async function getAllServices(req, res) {
	try {
		const services = await serviceRepository.getAllServices();
		res.json(services);
	} catch (error) {
		res.status(500).json({ error: "Error fetching services" });
	}
}
