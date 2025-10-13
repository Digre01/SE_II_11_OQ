import { EntitySchema } from "typeorm";

export const Queue = new EntitySchema({
  name: 'Queue',
  tableName: 'queues',
  columns: {
    id: {
      type: Number,          // int
      primary: true,
      generated: 'increment' //incremental ID
    },
    serviceName: {
      name: 'service_name',
      type: String,          // varchar
      length: 255,
      nullable: false,
      unique: false
    }
  }
});