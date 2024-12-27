import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoMirrorsEntity } from "./info_mirrors.entity";
import { InfoMirrorsController } from "./info_mirrors.controller";
import { InfoMirrorsService } from "./info_mirrors.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoMirrorsEntity])],
  controllers: [InfoMirrorsController],
  providers: [InfoMirrorsService],
})
export class InfoMirrorsModule {}
