import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { Chat } from './telegramEntity/chat.entity';
import { Message } from './telegramEntity/message.entity';

@Module({
  imports: [
    HttpModule, // <-- Import HttpModule here
    TypeOrmModule.forFeature([Chat, Message]), // Ensure that the repositories are correctly registered
  ],
  providers: [TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}
