import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";
import { CollectionsEntity } from "./collections.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CollectionsEntity])],
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionsModule {}
