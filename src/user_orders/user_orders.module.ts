import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserOrdersEntity } from "./user_orders.entity";
import { UserOrdersController } from "./user_orders.controller";
import { UserOrdersService } from "./user_orders.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserOrdersEntity])],
  controllers: [UserOrdersController],
  providers: [UserOrdersService],
})
export class UserOrdersModule {}
