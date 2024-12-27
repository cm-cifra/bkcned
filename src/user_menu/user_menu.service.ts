import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserMenuEntity } from './user_menu.entity';

@Injectable()
export class UserMenuService {
    constructor(
        @InjectRepository(UserMenuEntity)
        private readonly i_repository: Repository<UserMenuEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("user_menu")
        .orderBy('user_menu.name', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("user_menu")
        .select("COUNT(user_menu.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("user_menu")
        .orderBy('user_menu.name', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("user_menu")
        .where("user_menu.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: UserMenuEntity) : Promise<UserMenuEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

      return await this.i_repository.update(data.id, { 

        name: data.name,
        link : data.link,
        title : data.title,
        profile_pic : data.profile_pic,
        isTitle : data.isTitle,
        description : data.description
        
      });

      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            return await this.i_repository.createQueryBuilder("user_menu")
            .where("user_menu.name LIKE :name OR user_menu.abbre LIKE :name", {name : `%${name}%`})
            .getMany();
        }

        async getAllPage(page : number, limit : number){

            var start_from = (page-1) * limit;

            const query = this.i_repository.createQueryBuilder('user_menu');
    
            const results = await query
            .orderBy('user_menu.datetime_added', 'DESC')
            .skip(start_from)
            .take(limit) 
            .getManyAndCount();
    
            return results;
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
