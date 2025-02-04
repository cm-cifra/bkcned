import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Chat } from './chat.entity';

@Entity({ name: "tele_message" })
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  sender: 'user' | 'bot';

  @ManyToOne(() => Chat, (chat) => chat.messages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'chatId' })  // Explicitly set the column name
  chat: Chat;

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
