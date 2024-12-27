import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "users"})
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fname: string

    @Column()
    mname: string

    @Column()
    lname: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    ut_id: number

    @Column()
    address: string

    @Column()
    contact_num: string
    
    @Column()
    isActive: number

    @Column()
    isApproved: number

    @Column()
    datetime_added: string


}