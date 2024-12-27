import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserTypeMenuEntity } from "./user_type_menu.entity";
import { UserTypeMenuController } from "./user_type_menu.controller";
import { UserTypeMenuService } from "./user_type_menu.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeMenuEntity])],
  controllers: [UserTypeMenuController],
  providers: [UserTypeMenuService],
})
export class UserTypeMenuModule {}
