import { EntitySchema } from "typeorm";

export const Service = new EntitySchema({
  name: 'Service',
  tableName: 'services',
  columns: {
    serviceId: {
      type: Number,
      primary: true,
      generated: 'increment'
    },
    name: {
      type: String,
      length: 255,
      nullable: false
    },
    avgTime: {
      type: Number,
      nullable: false
    }
  }
});