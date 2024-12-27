import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_mixers"})
export class InfoMixersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    color: string

    @Column()
    surface: string

    @Column()
    material: string

    @Column()
    spout: string

    @Column()
    height: number

    @Column()
    spout_height: number

    @Column()
    spout_length: number

    @Column()
    installation: string

    @Column()
    control: string

    @Column()
    eyeliner_type: string

    @Column()
    eyeliner_standard: string

    @Column()
    control_mechanism: string

    @Column()
    suitable_for_bowl_sink: string

    @Column()
    consumption_saving: string

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