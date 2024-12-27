import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoKitchenSinkEntity } from './info_kitchen_sink.entity';

@Injectable()
export class InfoKitchenSinkService {
    constructor(
        @InjectRepository(InfoKitchenSinkEntity)
        private readonly i_repository: Repository<InfoKitchenSinkEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_kitchen_sink")
        .orderBy('info_kitchen_sink.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_kitchen_sink")
        .select("COUNT(info_kitchen_sink.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_kitchen_sink")
        .orderBy('info_kitchen_sink.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_kitchen_sink")
        .where("info_kitchen_sink.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoKitchenSinkEntity) : Promise<InfoKitchenSinkEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){


        return await this.i_repository.update(data.id, { 
            surface: data.surface,
            color: data.color,
            form: data.form,
            material : data.material,
            dimensions : data.dimensions,
            code : data.code,
            thickness : data.thickness,
            hole_for_mixer: data.hole_for_mixer,
            installation : data.installation,
            drain_overflow : data.drain_overflow,
            presence_wing : data.presence_wing,
            hole_for_filter : data.hole_for_filter,
            equipment : data.equipment,
            guarantee : data.guarantee,
            product_weight : data.product_weight,
            package_weight : data.package_weight,
            scheme : data.scheme,
            datetime_modified : data.datetime_modified,
          });

      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("info_kitchen_sink")
            // .where("info_kitchen_sink.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_kitchen_sink")
            .where("info_kitchen_sink.product_id = :id", {id : id})
            .getOne();
        }
    

        async createBulk(user: InfoKitchenSinkEntity[]): Promise<InfoKitchenSinkEntity[]> {
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
