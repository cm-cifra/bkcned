import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartsEntity } from "./cart.entity";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";

@Module({
  imports: [TypeOrmModule.forFeature([CartsEntity])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
