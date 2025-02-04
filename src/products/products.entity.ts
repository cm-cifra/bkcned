import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "products" })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    sku: string

    @Column()
    factory_part_num: string

    @Column()
    category_id: number

    @Column()
    collection_id: number

    @Column()
    product_img: string

    @Column()
    price: number
    @Column()
    description: string
    @Column()
    isTrash: number

    @Column()
    datetime_added: string
   
}