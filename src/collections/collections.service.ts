import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CollectionsEntity } from './collections.entity';
import { CategoriesEntity } from 'src/entities';

@Injectable()
export class CollectionsService {
    constructor(
        @InjectRepository(CollectionsEntity)
        private readonly i_repository: Repository<CollectionsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("collections")
        .orderBy('collections.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("collections")
        .select("COUNT(collections.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("collections")
        .orderBy('collections.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("collections")
        .where("collections.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: CollectionsEntity) : Promise<CollectionsEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){


      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            return await this.i_repository.createQueryBuilder("collections")
            .where("collections.description LIKE :name", {name : `%${name}%`})
            .getMany();
        }

        async findItemByCategory(id : number){

            return await this.i_repository.createQueryBuilder("collections")
            .leftJoinAndMapOne('collections.category_id',CategoriesEntity,'category','collections.category_id = category.id')
            .where("collections.category_id = :id", {id : id})
            .orderBy("collections.description", "ASC")
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
