import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductKitsEntity } from "./product_kits.entity";
import { ProductKitsController } from "./product_kits.controller";
import { ProductKitsService } from "./product_kits.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProductKitsEntity])],
  controllers: [ProductKitsController],
  providers: [ProductKitsService],
})
export class ProductKitsModule {}
