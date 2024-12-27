import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "product_kits"})
export class ProductKitsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    kit_id: number

    @Column()
    product_id: number

    @Column()
    datetime_added: string


}