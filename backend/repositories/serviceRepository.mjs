
import { AppDataSourcePostgres } from "../config/data-source.js";
import { Service } from "../entities/Service.js";

export class ServiceRepository {
	get repo() {
		return AppDataSourcePostgres.getRepository(Service);
	}

	async getAllServices() {
		return await this.repo.find();
	}
}

export const serviceRepository = new ServiceRepository();
