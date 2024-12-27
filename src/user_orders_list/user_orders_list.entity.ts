import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "user_orders_list"})
export class UserOrdersListEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    order_id: string

    @Column()
    product_id: number

    @Column()
    price: number

    @Column()
    qty: number

    @Column()
    total: number


}