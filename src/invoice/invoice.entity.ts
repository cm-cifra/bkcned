import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "invoice" })
export class InvoiceEntity {
    @PrimaryGeneratedColumn()
    id: number  
 
    @Column()
    issue_date: string

    @Column()
    due_date: string 

    @Column()
    amount: number

    @Column()
    status: number 

    @Column()
    invoice_id: number

    @Column()
    datetime_added: string


}