import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "collections"})
export class CollectionsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category_id: number

    @Column()
    description: string

    @Column()
    datetime_added: string

}