import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoMirrorCabinetsEntity } from './info_mirror_cabinets.entity';

@Injectable()
export class InfoMirrorCabinetsService {
    constructor(
        @InjectRepository(InfoMirrorCabinetsEntity)
        private readonly i_repository: Repository<InfoMirrorCabinetsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_mirror_cabinets")
        .orderBy('info_mirror_cabinets.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_mirror_cabinets")
        .select("COUNT(info_mirror_cabinets.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_mirror_cabinets")
        .orderBy('info_mirror_cabinets.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_mirror_cabinets")
        .where("info_mirror_cabinets.id = :id", {id : id})
        .getOne();
    }

    async addItem(user: InfoMirrorCabinetsEntity) : Promise<InfoMirrorCabinetsEntity>{
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

            // return await this.i_repository.createQueryBuilder("info_mirror_cabinets")
            // .where("info_mirror_cabinets.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }


        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_mirrors")
            .where("info_mirrors.product_id = :id", {id : id})
            .getMany();
        }

        async createBulk(user: InfoMirrorCabinetsEntity[]): Promise<InfoMirrorCabinetsEntity[]> {
            return this.i_repository.save(user);
          }

        
 async searchItems(filters: { dimensions?: string}) {
    const query: any = {}; 
    if (filters.dimensions) {
        query.dimensions = filters.dimensions;
    } 
   
    if (Object.keys(query).length === 0) {
        return await this.i_repository.find();
    } 
    return await this.i_repository.find({
        where: query,
    });
}

}
