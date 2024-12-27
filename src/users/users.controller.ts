import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all users by type (active/inactive)
  @Get('type')
  async getAllByType(
    @Query('isActive') isActive: number, 
  ) {
    return await this.usersService.getAllByType(isActive);
  }

  // Check if the email is already registered
  @Get('check-email/:email')
  async checkEmailExisted(@Param('email') email: string) {
    const user = await this.usersService.checkEmailExisted(email);
    if (user) {
      return { exists: true, user };
    } else {
      return { exists: false };
    }
  }

  @Get("find/:id")
  async findItem(@Param('id') id: number) {
      const response = await this.usersService.findItem(id);
      return response;
  }
  // Check if the user is approved
  @Get('check-approved/:email')
  async checkIfApproved(@Param('email') email: string) {
    const user = await this.usersService.checkIfApproved(email);
    if (user) {
      return { approved: true, user };
    } else {
      return { approved: false };
    }
  }

  // Check if the user is active
  @Get('check-active/:email')
  async checkIfActive(@Param('email') email: string) {
    const user = await this.usersService.checkIfActive(email);
    if (user) {
      return { active: true, user };
    } else {
      return { active: false };
    }
  }

  // Create a new user
  @Post('create')
  async createUser(@Body() user: UsersEntity) {
    const createdUser = await this.usersService.create(user);
    return { success: true, user: createdUser }; // Return success with the created user data
  }
}
