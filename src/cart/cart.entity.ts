import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "carts" })
export class CartsEntity {
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
  user_cart_id: number
  @Column()
  datetime_added: string


}