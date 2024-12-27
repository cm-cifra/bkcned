import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserMenuEntity } from "./user_menu.entity";
import { UserMenuController } from "./user_menu.controller";
import { UserMenuService } from "./user_menu.service";


@Module({
  imports: [TypeOrmModule.forFeature([UserMenuEntity])],
  controllers: [UserMenuController],
  providers: [UserMenuService],
})
export class UserMenuModule {}
