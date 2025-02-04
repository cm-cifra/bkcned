import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, StreamableFile, BadRequestException, Response, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsEntity } from "./products.entity";
import { createReadStream } from "fs";
import { join } from "path";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesHelper } from "src/helper";
import { diskStorage } from "multer";
import { I18nService } from 'nestjs-i18n';

@Controller('products')
export class ProductsController {

    constructor(private i_service: ProductsService) {

    }

    @Get("get_all/:page/:limit")
    async getAll(@Param('page') page: number, @Param('limit') limit: number) {
        const response = await this.i_service.getAll(page, limit);
        return response;
    }

    @Get("get_count")
    async getCount() {
        const response = await this.i_service.getCount();
        return response;
    }

    @Get("find/:id")
    async findItem(@Param('id') id: number) {
        const response = await this.i_service.findItem(id);
        return response;
    }

    @Post('add')
    async addItem(@Body() createUserOto: ProductsEntity) {
        const response = await this.i_service.addItem(createUserOto);
        return response;
    }

    @Post("edit")
    async editItem(@Body() data: any) {
        const response = await this.i_service.editItem(data);
        return response;
    }

    @Post("delete")
    async deleteItem(@Body() data: any) {
        const response = await this.i_service.deleteItem(data);
        return response;
    }

    @Get("search/:name")
    async searchName(@Param('name') name: string) {
        const response = await this.i_service.searchName(name);
        return response;
    } @Get("search_sku/:sku")
    async searchSKU(@Param('sku') sku: string) {
        const response = await this.i_service.searchSKU(sku);
        return response;
    }


    @Get("find_by_ids/:sku/:factory_part_num")
    async findItemByIds(@Param('sku') sku: string, @Param('factory_part_num') factory_part_num: string) {
        const response = await this.i_service.findItemByIds(sku, factory_part_num);
        return response;
    }

    @Get("find_by_collection/:collection_id/:page/:limit")
    async findItemByCollection(@Param('collection_id') collection_id: number, @Param('page') page: number, @Param('limit') limit: number) {
        const response = await this.i_service.findItemByCollection(collection_id, page, limit);
        return response;
    }

    @Get("find_by_category/:category_id/:page/:limit")
    async findItemByCategory(@Param('category_id') category_id: number, @Param('page') page: number, @Param('limit') limit: number) {
        const response = await this.i_service.findItemByCategory(category_id, page, limit);
        return response;
    }

    @Get("find_by_sku/:sku")
    async findItemBySKU(@Param('sku') sku: string) {
        const response = await this.i_service.findItemBySKU(sku);
        return response;
    }

    @Post('upload_img')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: '../product_images/',
            filename: FilesHelper.customFileName,
        })
    })
    )
    async uploadEsign(@UploadedFiles() file) {


        return file;


    }

    @Get("get_img/:filename")
    getFile(@Param('filename') filename: string, @Response({ passthrough: true }) res): StreamableFile {


        const file = createReadStream(join(process.cwd(), '../product_images/' + filename));
        res.set({
            'Content-Type': 'image/webp',
            'Content-Disposition': 'inline; filename=' + filename,
        });
        file.on('error', (err) => { console.error(err); });
        return new StreamableFile(file);



    }

    @Get("search_to_add_kit/:name")
    async searchNameToAddKit(@Param('name') name: string) {
        const response = await this.i_service.searchNameToAddKit(name);
        return response;
    }

    @Get("search_tag/:name/:data")
    async searchNameWithTags(@Param('name') name: string, @Param('data') data: any) {
        const response = await this.i_service.searchNameWithTags(name, data);
        return response;
    }


    @Post("bulk")
    async createBulk(@Body() createUserOto: ProductsEntity[]) {
        try {
            const response = await this.i_service.createBulk(createUserOto);
            return { success: true, data: response };
        } catch (error) {
            console.error("Error saving bulk data:", error.message);
            throw new BadRequestException("Error saving bulk data");
        }
    }
    @Get("searchNot/:name")
async searchNotName(@Param('name') name: string) {
    const response = await this.i_service.searchName(name);
    return response;
}
}
