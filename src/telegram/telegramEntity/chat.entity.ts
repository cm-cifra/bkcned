import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Message } from './message.entity';

@Entity({ name: "tele_chat" })
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => Message, (message) => message.chat, { cascade: true })
  messages: Message[];

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @BeforeInsert()
  setCreationDate() {
    const timestamp = new Date().toISOString();
    this.created_at = timestamp;
    this.updated_at = timestamp;
  }

  @BeforeUpdate()
  setUpdateDate() {
    this.updated_at = new Date().toISOString();
  }
}
