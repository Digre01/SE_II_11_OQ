import { EntitySchema } from "typeorm";

export const Client = new EntitySchema({
  name: "Queues",
  tableName: "queues",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    service: {
      type: String,
      length: 255,
      nullable: false
    },
  }
});
