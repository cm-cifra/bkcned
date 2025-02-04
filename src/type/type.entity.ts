import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "Type"})
export class TypeEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    datetime_added: string

}