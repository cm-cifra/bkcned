import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoCounterTopSinkEntity } from './info_counter_top_sink.entity';

@Injectable()
export class InfoCounterTopSinkService {
    constructor(
        @InjectRepository(InfoCounterTopSinkEntity)
        private readonly i_repository: Repository<InfoCounterTopSinkEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(){

        return await this.i_repository.createQueryBuilder("info_counter_top_sink")
        .orderBy('info_counter_top_sink.description', 'ASC')
        .getMany();
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("info_counter_top_sink")
        .select("COUNT(info_counter_top_sink.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("info_counter_top_sink")
        .orderBy('info_counter_top_sink.description', 'ASC')
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("info_counter_top_sink")
        .where("info_counter_top_sink.id = :id", {id : id})
        .getOne();
    }
    
    async addItem(user: InfoCounterTopSinkEntity) : Promise<InfoCounterTopSinkEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        return await this.i_repository.update(data.id, { 
            style: data.style,
            color: data.color,
            sink_type: data.sink_type,
            shell_shape : data.shell_shape,
            num_shells : data.num_shells,
            shell_material : data.shell_material,
            sink_dimensions : data.sink_dimensions,
            table_top_material: data.table_top_material,
            table_top_dimensions : data.table_top_dimensions,
            table_top_thickness : data.table_top_thickness,
            table_top_location : data.table_top_location,
            mixer_location : data.mixer_location,
            sink_diameter : data.sink_diameter,
            siphon_diameter : data.siphon_diameter,
            ready_made_holes_for_mixer : data.ready_made_holes_for_mixer,
            overflow : data.overflow,
            bottom_valve : data.bottom_valve,
            sink_possible_base : data.sink_possible_base,
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

            // return await this.i_repository.createQueryBuilder("info_counter_top_sink")
            // .where("info_counter_top_sink.description LIKE :name", {name : `%${name}%`})
            // .getMany();
        }

        async findItemByProduct(id : number){

            return await this.i_repository.createQueryBuilder("info_counter_top_sink")
            .where("info_counter_top_sink.product_id = :id", {id : id})
            .getOne();
        }

        async createBulk(user: InfoCounterTopSinkEntity[]): Promise<InfoCounterTopSinkEntity[]> {
            return this.i_repository.save(user);
          }

    


}
