 
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {InvoiceInfoEntity } from "./invoice_info.entity";
import { InvoiceInfoController } from "./invoice_info.controller";
import { InvoiceInfoService } from "./invoice_info.service";

 

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceInfoEntity])],
    controllers: [InvoiceInfoController],
    providers: [InvoiceInfoService],
})
export class InvoiceInfoModule { }
