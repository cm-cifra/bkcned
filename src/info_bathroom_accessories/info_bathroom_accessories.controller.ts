import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, Query } from "@nestjs/common";
import { InfoBathRoomAccessoriesEntity } from "./info_bathroom_accessories.entity";
import { InfoBathRoomAccessoriesService } from "./info_bathroom_accessories.service";

@Controller('info_bathroom_accessories')
export class InfoBathroomAccessoriesController {

    constructor(private i_service: InfoBathRoomAccessoriesService) {

    }

    @Get("get_all")
    async getAll() {
        const response = await this.i_service.getAll();
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
    async addItem(@Body() createUserOto: InfoBathRoomAccessoriesEntity) {
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
    }
    @Get("find_by_product/:id")
    async findItemByProduct(@Param('id') id: number) {
        const response = await this.i_service.findItemByProduct(id);
        return response;
    }

    @Post("bulk")
    async createBulk(@Body() createUserOto: InfoBathRoomAccessoriesEntity[]) {
        try {
            const response = await this.i_service.createBulk(createUserOto);
            return { success: true, data: response };
        } catch (error) {
            console.error("Error saving bulk data:", error.message);
            throw new BadRequestException("Error saving bulk data");
        }
    }

    @Get("searchItem")
    async searchItems(

        @Query('color') color?: string
    ) {
        const response = await this.i_service.searchItems({ color });
        return response;
    }



}
