 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { StatusEntity } from './status.entity';

@Injectable()
export class StatusService { 
    constructor(
        @InjectRepository(StatusEntity)
        private readonly i_repository: Repository<StatusEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("status")
        .orderBy('status.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("status")
        .select("COUNT(status.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("status")
        .orderBy('status.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("status")
        .where("status.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: StatusEntity) : Promise<StatusEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){


      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            return await this.i_repository.createQueryBuilder("status")
            .where("status.description LIKE :name", {name : `%${name}%`})
            .getMany();
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
