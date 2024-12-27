import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "user_menu"})
export class UserMenuEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    title: string

    @Column()
    link: string

    @Column()
    datetime_added: string

    @Column()
    profile_pic: string

    @Column()
    isTitle: number

    @Column()
    description: string

}