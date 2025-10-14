import { AppDataSourcePostgres } from "../config/data-source.js";
import { Queue } from "../entities/Queue.js";

export class QueueRepository {
	get repo() {
		return AppDataSourcePostgres.getRepository(Queue);
	}

	async createTicket(serviceId) {
		const count = await this.repo.count({ where: { serviceId } });
		const progressiveNumber = count + 1;
		const listCode = `S${serviceId}-${progressiveNumber}`;
		const entity = this.repo.create({ serviceId, ticket: listCode });
		const saved = await this.repo.save(entity);
		return { id: saved.id, listCode };
	}

  // TO MODIFY (serviceName should be serviceId)
  async getLastByServiceName(serviceName){
    const first = await this.repo.findOne({
      where: { serviceName },
      order: { id: "ASC" },
    });

    //SHOULD ALSO REMOVE THE RETURNED LINE FROM THE DATABASE
    //to do

    return first ? first.id : null;
  }
}

export const queueRepository = new QueueRepository();
