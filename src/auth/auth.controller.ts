import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    //@UseGuards(LocalAuthGuard)
    @Post('login')
    async loginUser(@Request() req) {
    //return {msg: 'Logged in!'}; // TODO: return JWT access token
    //return req.user;
    return this.authService.loginUser(req.body);
    }

}
