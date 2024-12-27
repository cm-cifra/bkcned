import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoBathRoomAccessoriesEntity } from './info_bathroom_accessories.entity';

@Injectable()
export class InfoBathRoomAccessoriesService {
    constructor(
        @InjectRepository(InfoBathRoomAccessoriesEntity)
        private readonly i_repository: Repository<InfoBathRoomAccessoriesEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_bathroom_accessories")
        .orderBy('info_bathroom_accessories.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_bathroom_accessories")
        .select("COUNT(info_bathroom_accessories.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_bathroom_accessories")
        .orderBy('info_bathroom_accessories.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_bathroom_accessories")
        .where("info_bathroom_accessories.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoBathRoomAccessoriesEntity) : Promise<InfoBathRoomAccessoriesEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 
            style: data.style,
            color: data.color,
            product_equipment: data.product_equipment,
            dimensions : data.dimensions,
            surface : data.surface,
            material : data.material,
            guarantee : data.guarantee,
            product_weight : data.product_weight,
            package_weight : data.package_weight,
            datetime_modified : data.datetime_modified,
          });

      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("info_bathroom_accessories")
            // .where("info_bathroom_accessories.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_bathroom_accessories")
            .where("info_bathroom_accessories.product_id = :id", {id : id})
            .getOne();
        }

        async createBulk(user: InfoBathRoomAccessoriesEntity[]): Promise<InfoBathRoomAccessoriesEntity[]> {
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
