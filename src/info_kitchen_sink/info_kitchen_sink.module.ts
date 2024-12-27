import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoKitchenSinkEntity } from "./info_kitchen_sink.entity";
import { InfoKitchenSinkController } from "./info_kitchen_sink.controller";
import { InfoKitchenSinkService } from "./info_kitchen_sink.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoKitchenSinkEntity])],
  controllers: [InfoKitchenSinkController],
  providers: [InfoKitchenSinkService],
})
export class InfoKitchenSinkModule {}
