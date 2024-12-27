import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoPedestalsEntity } from "./info_pedestals.entity";
import { InfoPedestalsController } from "./info_pedestals.controller";
import { InfoPedestalsService } from "./info_pedestals.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoPedestalsEntity])],
  controllers: [InfoPedestalsController],
  providers: [InfoPedestalsService],
})
export class InfoPedestalsModule {}
