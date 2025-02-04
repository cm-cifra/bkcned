import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeEntity } from "./type.entity";
import { TypeController } from "./type.controller";
import { TypeService } from "./type.service";


@Module({
    imports: [TypeOrmModule.forFeature([TypeEntity])],
    controllers: [TypeController],
    providers: [TypeService],
})
export class TypeModule { }
