import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_counter_top_sink"})
export class InfoCounterTopSinkEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    style: string

    @Column()
    color: string

    @Column()
    sink_type: string

    @Column()
    shell_shape: string

    @Column()
    num_shells: number

    @Column()
    shell_material: string

    @Column()
    sink_dimensions: string

    @Column()
    table_top_material: string

    @Column()
    table_top_dimensions: string

    @Column()
    table_top_thickness: number

    @Column()
    table_top_location: string

    @Column()
    mixer_location: string

    @Column()
    sink_diameter: number

    @Column()
    siphon_diameter: number

    @Column()
    ready_made_holes_for_mixer: string

    @Column()
    overflow: string

    @Column()
    bottom_valve: string
    
    @Column()
    sink_possible_base: string

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