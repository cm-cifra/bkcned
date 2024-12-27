import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoCounterTopSinkEntity } from "./info_counter_top_sink.entity";
import { InfoCounterTopSinkController } from "./info_counter_top_sink.controller";
import { InfoCounterTopSinkService } from "./info_counter_top_sink.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoCounterTopSinkEntity])],
  controllers: [InfoCounterTopSinkController],
  providers: [InfoCounterTopSinkService],
})
export class InfoCounterTopSinkModule {}
