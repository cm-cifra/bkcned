import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_baths_disabled"})
export class InfoBathsDisabledEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    dimensions: string

    @Column()
    weight: number

    @Column()
    capacity: string

    @Column()
    description: string
    @Column()
    width: number
    @Column()
    drain_location: string

    @Column()
    entrance_height: number

    @Column()
    opening_height: number

    @Column()
    opening_width: number

    @Column()
    seat_height: number

    @Column()
    drain: string

    @Column()
    equipment: string

    @Column()
    options: string

    @Column()
    accessories: string

    @Column()
    guarantee: string

    @Column()
    package_weight: number

    @Column()
    datetime_modified: string


}