import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "user_type_menu"})
export class UserTypeMenuEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ut_id: number

    @Column()
    um_id: number

    @Column()
    datetime_added: string

    @Column()
    order_num: number

    @Column()
    parent_id: number

    @Column()
    position: number

    @Column()
    privilege: string

}