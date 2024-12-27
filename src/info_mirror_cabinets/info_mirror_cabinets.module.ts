import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoMirrorCabinetsEntity } from "./info_mirror_cabinets.entity";
import { InfoMirrorCabinetsController } from "./info_mirror_cabinets.controller";
import { InfoMirrorCabinetsService } from "./info_mirror_cabinets.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoMirrorCabinetsEntity])],
  controllers: [InfoMirrorCabinetsController],
  providers: [InfoMirrorCabinetsService],
})
export class InfoMirrorCabinetsModule {}
