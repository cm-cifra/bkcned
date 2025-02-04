import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "Status"})
export class StatusEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    datetime_added: string

}