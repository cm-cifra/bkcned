import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "invoice_info" })
export class InvoiceInfoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sender_name: string

    @Column()
    sender_address: string

    @Column()
    sender_contact: string

    @Column()
    sender_email: string

    @Column()
    issue_date: string

    @Column()
    due_date: string

    @Column()
    amount: string

    @Column()
    status: string 

    @Column()
    user_id: string

    @Column()
    customer_name: string

    @Column()
    customer_contact: string

    @Column()
    customer_email: string

    @Column()
    customer_address: string

    @Column()
    product_id: string


    @Column()
    tax: number


    @Column()
    datetime_added: string



}