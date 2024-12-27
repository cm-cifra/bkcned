import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoMixersEntity } from "./info_mixers.entity";
import { InfoMixersController } from "./info_mixers.controller";
import { InfoMixersService } from "./info_mixers.service";

@Module({
  imports: [TypeOrmModule.forFeature([InfoMixersEntity])],
  controllers: [InfoMixersController],
  providers: [InfoMixersService],
})
export class InfoMixersModule {}
