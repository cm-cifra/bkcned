import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoShowerSystemsEntity } from "./info_shower_systems.entity";
import { InfoShowerSystemsController } from "./info_shower_systems.controller";
import { InfoShowerSystemsService } from "./info_shower_systems.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoShowerSystemsEntity])],
  controllers: [InfoShowerSystemsController],
  providers: [InfoShowerSystemsService],
})
export class InfoShowerSystemsModule {}
