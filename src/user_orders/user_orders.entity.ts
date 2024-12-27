import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "user_orders"})
export class UserOrdersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    order_id: string

    @Column()
    user_id: number

    @Column()
    datetime_added: string


}