import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserOrdersListEntity } from './user_orders_list.entity';

@Injectable()
export class UserOrdersListService {
    constructor(
        @InjectRepository(UserOrdersListEntity)
        private readonly i_repository: Repository<UserOrdersListEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("user_orders_list")
        .orderBy('user_orders_list.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("user_orders_list")
        .select("COUNT(user_orders_list.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("user_orders_list")
        .orderBy('user_orders_list.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("user_orders_list")
        .where("user_orders_list.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: UserOrdersListEntity) : Promise<UserOrdersListEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){


      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("user_orders_list")
            // .where("user_orders_list.description LIKE :name", {name : `%${name}%`})
            // .getMany();
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
