import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  getBotDialog(@Res() res) {
    res.status(HttpStatus.OK).send("Bot service started");
  }

  @Post('webhook')
  async handleUpdate(@Body() update: any) {
    await this.telegramService.handleIncomingMessage(update.message);
    return { status: 'Message processed' };
  }

  @Post('chats/reply')
  async sendReply(@Body() body: { chatId: number; message: string }) {
    const { chatId, message } = body;
    await this.telegramService.sendMessage(chatId, message);
    return { status: 'Reply sent' };
  }

  @Get('chats')
  async getAllChats(@Res() res) {
    const chats = await this.telegramService.getAllChats();
    return res.status(HttpStatus.OK).json(chats);
  }

  @Get('chats/:chatId')
  async getChatMessages(@Param('chatId') chatId: number, @Res() res) {
    const messages = await this.telegramService.getChatMessages(chatId);
    if (!messages.length) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'Chat not found' });
    }
    return res.status(HttpStatus.OK).json(messages);
  }
}
