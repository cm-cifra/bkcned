import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './telegramEntity/chat.entity';
import { Message } from './telegramEntity/message.entity';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService implements OnModuleInit {
    private readonly botToken = process.env.TELEGRAM_TOKEN || 'YOUR_ACCESS_TOKEN';
    private bot: TelegramBot;

    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(Chat) private chatRepository: Repository<Chat>,
        @InjectRepository(Message) private messageRepository: Repository<Message>,
    ) { }

    async onModuleInit() {
        process.env.NTBA_FIX_319 = '1'; // Prevents polling errors
        this.bot = new TelegramBot(this.botToken, { polling: true });

        // Listen for incoming messages
        this.bot.on('message', (msg) => this.handleIncomingMessage(msg));
    }

    async handleIncomingMessage(msg: TelegramBot.Message) {
        const id = msg.chat.id;
        const username = msg.chat.username || `${msg.chat.first_name} ${msg.chat.last_name}` || 'Unknown User';
        const text = msg.text;

        // Get current timestamp
        const timestamp = new Date().toISOString();
 
        let chat = await this.chatRepository.findOne({ where: { id: id } });
 
        if (!chat) {
            chat = this.chatRepository.create({ id, username, created_at: timestamp, updated_at: timestamp });
            await this.chatRepository.save(chat);
        } else {
            chat.updated_at = timestamp;
            await this.chatRepository.save(chat);
        }
 
        const userMessage = this.messageRepository.create({ text, sender: 'user', chat, created_at: timestamp, updated_at: timestamp });
        await this.messageRepository.save(userMessage);
 
        let replyText = '';

        const lowerText = text.toLowerCase();

        if (lowerText.startsWith('hi')) {
            replyText = `Hello ${msg.from.first_name}! Welcome to Artdecco, What would you like to know about me?`;
        } else if (lowerText.includes('best offer')) {
            replyText = "oh! Artdecco have many best offer ";
        } else if (lowerText.includes('hello')) {
            replyText = `Hello ${msg.from.first_name}! Welcome to Artdecco, What would you like to know about me?`;
        } else if (lowerText.includes('best price ')) {
            replyText = "Oh! Artdecco have many best best price ";
        } else if (lowerText.includes('/start')) {
            replyText = `Hello ${msg.from.first_name}! Welcome to Artdecco, What would you like to know about me?`;
        } else if (lowerText.includes('start')) {
            replyText = `Hello ${msg.from.first_name}! Welcome to Artdecco, What would you like to know about me?`;
        } else {

        }
        /* if (lowerText.startsWith('hi')) {
    replyText = `Привет, ${msg.from.first_name}! Чем могу помочь сегодня? Не стесняйтесь задавать вопросы!`;
} else if (lowerText.includes('best offer')) {
    replyText = "О, вы ищете лучшие предложения? Artdecco предлагает потрясающие скидки специально для вас! Скажите, что вас интересует!";
} else if (lowerText.includes('hello')) {
    replyText = `Привет, ${msg.from.first_name}! Добро пожаловать в Artdecco! Что бы вы хотели узнать сегодня?`;
} else if (lowerText.includes('best price')) {
    replyText = "Ищете лучшие цены? В Artdecco невероятные предложения! Скажите, что вас интересует, и я помогу найти лучший вариант!";
} else {
    replyText = `Привет, ${msg.from.first_name}! Добро пожаловать в Artdecco! Если у вас есть вопросы или нужна помощь, не стесняйтесь обращаться!`;
}
*/

        // Send the reply back to the user
        await this.sendMessage(id, replyText);
    }

    async sendMessage(id: number, text: string) {
        try {
            // Send message to the chat via Telegram bot
            await this.bot.sendMessage(id, text);

            // Get current timestamp for bot's message
            const timestamp = new Date().toISOString();

            // Save the bot's message in the database
            const chat = await this.chatRepository.findOne({ where: { id: id } });
            if (chat) {
                const botMessage = this.messageRepository.create({ text, sender: 'bot', chat, created_at: timestamp, updated_at: timestamp });
                await this.messageRepository.save(botMessage);
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    }

    async getAllChats() {
        const chats = await this.chatRepository.find({ relations: ['messages'] });
        return chats.map(chat => ({
            ...chat,
            messages: chat.messages.map(message => ({
                text: message.text,
                sender: message.sender,
                created_at: message.created_at,
                updated_at: message.updated_at,
            }))
        }));
    }

    async getChatMessages(id: number) {
        const messages = await this.messageRepository.find({
            where: { chat: { id: id } },
            relations: ['chat'],
        });
        return messages.map(message => ({
            text: message.text,
            sender: message.sender,
            created_at: message.created_at,
            updated_at: message.updated_at,
        }));
    }
}
