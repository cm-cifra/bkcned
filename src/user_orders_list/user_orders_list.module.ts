import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserOrdersListEntity } from "./user_orders_list.entity";
import { UserOrdersListController } from "./user_orders_list.controller";
import { UserOrdersListService } from "./user_orders_list.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserOrdersListEntity])],
  controllers: [UserOrdersListController],
  providers: [UserOrdersListService],
})
export class UserOrdersListModule {}
