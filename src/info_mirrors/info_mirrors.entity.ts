import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_mirrors"})
export class InfoMirrorsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    style: string

    @Column()
    dimensions: string

    @Column()
    form: string

    @Column()
    frame: string

    @Column()
    material: string
    @Column()
    width: number
    @Column()
    backlight_placement: string

    @Column()
    backlight_color: string

    @Column()
    switch_type: string

    @Column()
    anti_fog_coating: string

    @Column()
    peculiarities: string

    @Column()
    product_weight: number

    @Column()
    package_weight: number

    @Column()
    guarantee: string

    @Column()
    scheme: string

    @Column()
    datetime_modified: string


}