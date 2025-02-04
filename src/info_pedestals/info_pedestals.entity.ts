import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_pedestals" })
export class InfoPedestalsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    brand_name: string

    @Column()
    style: string

    @Column()
    dimensions: string

    @Column()
    color_cabinet: string

    @Column()
    color_fittings: string

    @Column()
    material_cabinet_facade: string

    @Column()
    material_cabinet_body: string

    @Column()
    covering: string

    @Column()
    storage_system: string

    @Column()
    installation: string

    @Column()
    fittings_with_closer_mechanism: string

    @Column()
    guarantee: string

    @Column()
    product_weight: number

    @Column()
    package_weight: number

    @Column()
    scheme: string
    @Column()
    width: number

    @Column()
    datetime_modified: string


}