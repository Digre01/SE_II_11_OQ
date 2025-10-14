import { EntitySchema } from 'typeorm';

export const Service = new EntitySchema({
    name: 'Service',
    tableName: 'services',
    columns: {
        id: {
            type: String,          
            primary: true,
        },
        name: {
            name: 'service_name',
            type: String,
            length: 255,
            nullable: false,
            unique: true
        },
        avgTime: {
            name: 'average_time',
            type: Number >= 0,
            nullable: false,
            unique: false
        }
    }
});