import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoKitsEntity } from './info_kits.entity';

@Injectable()
export class InfoKitsService {
    constructor(
        @InjectRepository(InfoKitsEntity)
        private readonly i_repository: Repository<InfoKitsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_kits")
        .orderBy('info_kits.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_kits")
        .select("COUNT(info_kits.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_kits")
        .orderBy('info_kits.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_kits")
        .where("info_kits.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoKitsEntity) : Promise<InfoKitsEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 
            brand: data.brand,
            configuration: data.configuration,
            datetime_modified: data.datetime_modified
        });
      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("info_kits")
            // .where("info_kits.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_kits")
            .where("info_kits.product_id = :id", {id : id})
            .getOne();
        }


        async createBulk(user: InfoKitsEntity[]): Promise<InfoKitsEntity[]> {
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
