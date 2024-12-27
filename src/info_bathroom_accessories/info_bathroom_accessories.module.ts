import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoBathRoomAccessoriesEntity } from "./info_bathroom_accessories.entity";
import { InfoBathroomAccessoriesController } from "./info_bathroom_accessories.controller";
import { InfoBathRoomAccessoriesService } from "./info_bathroom_accessories.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoBathRoomAccessoriesEntity])],
  controllers: [InfoBathroomAccessoriesController],
  providers: [InfoBathRoomAccessoriesService],
})
export class InfoBathRoomAccessoriesModule {}
