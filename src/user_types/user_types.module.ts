import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserTypesEntity } from "./user_types.entity";
import { UserTypesController } from "./user_types.controller";
import { UserTypesService } from "./user_types.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserTypesEntity])],
  controllers: [UserTypesController],
  providers: [UserTypesService],
})
export class UserTypesModule {}
