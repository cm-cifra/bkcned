import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, StreamableFile, Response, UseInterceptors, UploadedFiles} from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesHelper } from "src/helper";
import { diskStorage } from "multer";
import { ProductsImgService } from "./products_img.service";
import { ProductsImgEntity } from "./products_img.entity";

@Controller('products_img')
export class ProductsImgController {

    constructor(private i_service: ProductsImgService) {

    }

    @Get("get_all/:page/:limit")
    async getAll(@Param('page') page: number, @Param('limit') limit: number) {
        const response = await this.i_service.getAll(page,limit);
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
    async addItem(@Body() createUserOto: ProductsImgEntity){
        const response = await this.i_service.addItem(createUserOto);
        return response;
    }

    @Post("edit")
    async editItem(@Body() data:any) {
        const response = await this.i_service.editItem(data);
        return response;
    }

    @Post("delete")
    async deleteItem(@Body() data:any) {
        const response = await this.i_service.deleteItem(data);
        return response;
    }

   
    @Get("find_by_product_id/:id")
    async findItemByProductId(@Param('id') id: number) {
        const response = await this.i_service.findItemByProductId(id);
        return response;
    }

    @Post('upload_img')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
        destination: '../product_sub_images/',
        filename: FilesHelper.customFileName,
    })
  })
  )
  async uploadEsign(@UploadedFiles() file) {


    return file;


  }

    @Get("get_img/:filename")
    getFile(@Param('filename') filename: string, @Response({ passthrough: true }) res): StreamableFile {


            const file = createReadStream(join(process.cwd(), '../product_sub_images/' + filename));
            res.set({
                'Content-Type': 'image/webp',
                'Content-Disposition': 'inline; filename=' + filename,
            });
            file.on('error', (err) => { console.error(err); });
            return new StreamableFile(file);
        
        
        
    }




}
