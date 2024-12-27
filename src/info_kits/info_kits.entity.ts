import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "info_kits"})
export class InfoKitsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_id: number

    @Column()
    brand: string

    @Column()
    configuration: string

    @Column()
    num_pedestals: number

    @Column()
    num_mirrors: number

    @Column()
    num_mixers: number

    @Column()
    datetime_modified: string


}