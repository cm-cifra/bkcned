import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsImgEntity } from "./products_img.entity";
import { ProductsImgService } from "./products_img.service";
import { ProductsImgController } from "./products_img.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ProductsImgEntity])],
  controllers: [ProductsImgController],
  providers: [ProductsImgService],
})
export class ProductsImgModule {}
