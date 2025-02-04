import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_kitchen_sink" })
export class InfoKitchenSinkEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    surface: string

    @Column()
    color: string

    @Column()
    form: string

    @Column()
    material: string

    @Column()
    dimensions: string

    @Column()
    code: number

    @Column()
    thickness: number
    
    @Column()
    width: number
    @Column()
    hole_for_mixer: number

    @Column()
    installation: string

    @Column()
    drain_overflow: string

    @Column()
    presence_wing: string

    @Column()
    hole_for_filter: number

    @Column()
    equipment: string

    @Column()
    guarantee: string

    @Column()
    product_weight: number

    @Column()
    package_weight: number

    @Column()
    scheme: string

    @Column()
    datetime_modified: string


}