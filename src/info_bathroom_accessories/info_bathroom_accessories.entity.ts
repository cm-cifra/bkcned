import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_bathroom_accessories"})
export class InfoBathRoomAccessoriesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    product_equipment: string

    @Column()
    style: string

    @Column()
    color: string

    @Column()
    dimensions: string

    @Column()
    surface: string

    @Column()
    material: string

    @Column()
    product_weight: number

    @Column()
    package_weight: number

    @Column()
    guarantee: string

    @Column()
    datetime_modified: string


}