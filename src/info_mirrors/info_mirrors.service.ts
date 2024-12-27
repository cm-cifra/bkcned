import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoMirrorsEntity } from './info_mirrors.entity';

@Injectable()
export class InfoMirrorsService {
    constructor(
        @InjectRepository(InfoMirrorsEntity)
        private readonly i_repository: Repository<InfoMirrorsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_mirrors")
        .orderBy('info_mirrors.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_mirrors")
        .select("COUNT(info_mirrors.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_mirrors")
        .orderBy('info_mirrors.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_mirrors")
        .where("info_mirrors.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoMirrorsEntity) : Promise<InfoMirrorsEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 
            style: data.style,
            dimensions: data.dimensions,
            form: data.form,
            frame : data.frame,
            material : data.material,
            backlight_placement : data.backlight_placement,
            backlight_color : data.backlight_color,
            switch_type: data.switch_type,
            anti_fog_coating : data.anti_fog_coating,
            peculiarities : data.peculiarities,
            product_weight : data.product_weight,
            package_weight : data.package_weight,
            guarantee : data.guarantee,
            scheme : data.scheme,
            datetime_modified : data.datetime_modified,
          });

      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async searchName(name : string){

            // return await this.i_repository.createQueryBuilder("info_mirrors")
            // .where("info_mirrors.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_mirrors")
            .where("info_mirrors.product_id = :id", {id : id})
            .getOne();
        }

        async createBulk(user: InfoMirrorsEntity[]): Promise<InfoMirrorsEntity[]> {
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
