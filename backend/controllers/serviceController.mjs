import { serviceRepository } from "../repositories/serviceRepository.mjs";

export async function getAllServices() {
    const services = await serviceRepository.getAllServices();
    return services;
}