import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoKitsEntity } from "./info_kits.entity";
import { InfoKitsController } from "./info_kits.controller";
import { InfoKitsService } from "./info_kits.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoKitsEntity])],
  controllers: [InfoKitsController],
  providers: [InfoKitsService],
})
export class InfoKitsModule {}
