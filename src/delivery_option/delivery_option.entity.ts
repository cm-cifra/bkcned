import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "Delivery" })
export class DeliveryEntity {
    @PrimaryGeneratedColumn()
    id: number  
 
    @Column()
    description: string

  
    @Column()
    datetime_added: string


}