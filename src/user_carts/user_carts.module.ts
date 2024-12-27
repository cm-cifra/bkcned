import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCartsEntity } from "./user_carts.entity";
import { UserCartsController } from "./user_carts.controller";
import { UserCartsService } from "./user_carts.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserCartsEntity])],
  controllers: [UserCartsController],
  providers: [UserCartsService],
})
export class UserCartsModule {}
