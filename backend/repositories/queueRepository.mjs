import { AppDataSource, AppDataSourcePostgres } from "../config/data-source.js";
import { Queue } from "../entities/Queue.js";

export class QueueRepository {
  // get repo() {
  //   return AppDataSource.getRepository(Queue);
  // }

  get repo() {
    return AppDataSourcePostgres.getRepository(Queue);
  }

  async enqueuePerson(serviceName) {
    const entity = this.repo.create({ serviceName });
    return await this.repo.save(entity);
  }

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
