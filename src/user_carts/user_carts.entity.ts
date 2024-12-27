import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "user_carts"})
export class UserCartsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    product_id: number

    @Column()
    quantity: number

    @Column()
    status: number
    @Column()
    type: number
    @Column()
    datetime_added: string


}