import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoBathsDisabledEntity } from './info_baths_disabled.entity';

@Injectable()
export class InfoBathsDisabledService {
    constructor(
        @InjectRepository(InfoBathsDisabledEntity)
        private readonly i_repository: Repository<InfoBathsDisabledEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_baths_disabled")
        .orderBy('info_baths_disabled.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_baths_disabled")
        .select("COUNT(info_baths_disabled.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_baths_disabled")
        .orderBy('info_baths_disabled.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_baths_disabled")
        .where("info_baths_disabled.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoBathsDisabledEntity) : Promise<InfoBathsDisabledEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 
            dimensions: data.dimensions,
            weight: data.weight,
            capacity: data.capacity,
            description : data.description,
            drain_location : data.drain_location,
            entrance_height : data.entrance_height,
            opening_height : data.opening_height,
            opening_width : data.opening_width,
            seat_height : data.seat_height,
            drain : data.drain,
            equipment : data.equipment,
            options : data.options,
            accessories : data.accessories,
            guarantee : data.guarantee,
            package_weight : data.package_weight,
            datetime_modified : data.datetime_modified,
          });

      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("info_baths_disabled")
            // .where("info_baths_disabled.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_baths_disabled")
            .where("info_baths_disabled.product_id = :id", {id : id})
            .getOne();
        }

        async createBulk(user: InfoBathsDisabledEntity[]): Promise<InfoBathsDisabledEntity[]> {
            return this.i_repository.save(user);
          }
    

    // async assignUserRole(user: UserrolesEntity) : Promise<UserTypesEntity>{
    //     return await this.i_repository.save(user);
    // }

    // async activateUserRole(activateData:any){

    //   return await this.i_repository.update(activateData.id, { 
    //     status: activateData.status 
    //   });

    //   }

}
