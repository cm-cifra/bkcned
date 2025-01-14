import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, StreamableFile, Response, UseInterceptors, UploadedFiles} from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesHelper } from "src/helper";
import { diskStorage } from "multer";
import { CartService } from './cart.service';
import { CartsEntity } from './cart.entity';
 
@Controller('cart')
export class CartController {
  
      constructor(private i_service: CartService) {
  
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
      async addItem(@Body() createUserOto: CartsEntity){
          const response = await this.i_service.addItem(createUserOto);
          return response;
      }
      @Put("edit/:id")
      async editItemId(@Param('id') id: number, @Body() data: any) {
          const response = await this.i_service.editItemId(id, data);
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
  
      @Get("search/:name")
      async searchName(@Param('name') name: string) {
          const response = await this.i_service.searchName(name);
          return response;
      } 
  
      @Get("find_by_type/:user_id/:type/:page/:limit")
      async findByType(@Param('user_id') user_id: number, @Param('type') type: number, @Param('page') page: number, @Param('limit') limit: number) {
          const response = await this.i_service.findByType(user_id,type,page,limit);
          return response;
      }
      @Get("find_by_user/:user_id/:type/:status/:product_id")
      async findByUser(
        @Param('user_id') user_id: number,
        @Param('type') type: number,
        @Param('status') status: number,
        @Param('product_id') product_id: number,
      ) {
        const response = await this.i_service.findByUser(user_id, type, status, product_id);
     
        return response ? { exists: true, ...response } : { exists: false };
      }
      @Get("find_by_type/:user_id")
      async findByUserID(@Param('user_id') user_id: number) {
          const response = await this.i_service.findByUserID(user_id);
          return response;
      }
  
  
}
