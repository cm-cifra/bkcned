import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersEntity } from 'src/entities';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([UsersEntity]), JwtModule.register({
    secret: 'SECRET', //put in env vars
    signOptions: { expiresIn: '60s' },
  })],
  providers: [
    AuthService,
    JwtStrategy,
  {
    provide: 'USERS_SERVICE',
    useClass: UsersService
  }],
  exports : [AuthService],
  controllers: [AuthController]
})

export class AuthModule {}
