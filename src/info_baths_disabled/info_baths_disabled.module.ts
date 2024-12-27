import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoBathsDisabledEntity } from "./info_baths_disabled.entity";
import { InfoBathsDisabledController } from "./info_baths_disabled.controller";
import { InfoBathsDisabledService } from "./info_baths_disabled.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoBathsDisabledEntity])],
  controllers: [InfoBathsDisabledController],
  providers: [InfoBathsDisabledService],
})
export class InfoBathsDisabledModule {}
