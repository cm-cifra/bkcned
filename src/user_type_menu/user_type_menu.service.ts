import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserTypeMenuEntity } from './user_type_menu.entity';
import { UserMenuEntity } from 'src/entities';

@Injectable()
export class UserTypeMenuService {
    constructor(
        @InjectRepository(UserTypeMenuEntity)
        private readonly i_repository: Repository<UserTypeMenuEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("user_menu_type")
        .orderBy('user_menu_type.datetime_added', 'DESC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("user_menu_type")
        .select("COUNT(user_menu_type.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("user_menu_type")
        .orderBy('user_menu_type.datetime_added', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("user_menu_type")
        .where("user_menu_type.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: UserTypeMenuEntity) : Promise<UserTypeMenuEntity>{

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();

        try{

        const res = this.i_repository.save(user);
        await queryRunner.commitTransaction();
        return res;
        
        } catch (err) {
        await queryRunner.rollbackTransaction();
        } finally {
        await queryRunner.release();
        }
    
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 

            privilege: data.privilege,
            
          });
      }

      async assignChild(data:any){

        if(data.type == 1){ //add
            return await this.i_repository.update(data.id, { 
                parent_id : data.parent_id,
                position : data.position
              });
        
        }
        else{ //remove
            return await this.i_repository.update(data.id, { 
                parent_id : 0,
                position : 1,
              });
        }

          
          }

      async deleteItem(data:any){

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();

        try{

        const res = this.i_repository.delete(data.id);
        await queryRunner.commitTransaction();
        return res;
        
        } catch (err) {
        await queryRunner.rollbackTransaction();
        } finally {
        await queryRunner.release();
        }

        
  
        }


        async searchName(name : string){

            return await this.i_repository.createQueryBuilder("user_menu_type")
            .where("user_menu_type.name LIKE :name OR user_menu_type.abbre LIKE :name", {name : `%${name}%`})
            .getMany();
        }

        async getMenu(id : number){

            return await this.i_repository.createQueryBuilder("user_menu_type")
            .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            .where("user_menu_type.ut_id = :id", {id : id})
            .getMany();
        }

        async checkPrivilege(data : any){

            const check_data = await this.i_repository.createQueryBuilder("user_menu_type")
            .select("COUNT(user_menu_type.id)", "cnt")
            .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            .where("user_menu_type.ut_id = :ut_id AND menu.link = :link", {ut_id : data.ut_id, link : data.link})
            .getRawOne();

            return {
                check_data : check_data.cnt,
            };

            // return await this.i_repository.createQueryBuilder("user_menu_type")
            // .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            // .where("user_menu_type.ut_id = :ut_id AND menu.title = :link_name", {ut_id : ut_id, link_name : link_name})
            // .getOne();
        }

        async searchNameNav(name : string, ut_id : number){

            return await this.i_repository.createQueryBuilder("user_menu_type")
            .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            .where("menu.name LIKE :name AND user_menu_type.ut_id = :ut_id", {name : `%${name}%`, ut_id : ut_id})
            .getMany();
        }

        async getListDataClick(ut_id : number){

            return await this.i_repository.createQueryBuilder("user_menu_type")
            .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            .where("user_menu_type.ut_id = :ut_id", {ut_id : ut_id})
            .orderBy('menu.name', 'ASC')
            .getMany();
        }

        async findItemByType(usertype : number){

            return await this.i_repository.createQueryBuilder("user_menu_type")
            .leftJoinAndMapOne('user_menu_type.um_id',UserMenuEntity,'menu','user_menu_type.um_id = menu.id')
            .where("user_menu_type.ut_id = :usertype", {usertype : usertype})
            .orderBy('user_menu_type.datetime_added', 'DESC')
            .getMany();
        }

}
