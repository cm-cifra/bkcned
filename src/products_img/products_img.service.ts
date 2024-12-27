import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CategoriesEntity, CollectionsEntity, ProductsEntity, ProductsImgEntity } from 'src/entities';

@Injectable()
export class ProductsImgService {
    constructor(
        @InjectRepository(ProductsImgEntity)
        private readonly i_repository: Repository<ProductsImgEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(page : number, limit : number){

        var start_from = (page-1) * limit;

        const query = this.i_repository.createQueryBuilder('products_img');

        query.leftJoinAndMapOne('products_img.product_id',ProductsEntity,'products','products_img.product_id = products.id')
        .where('products_img.isTrash = 0')

        const results = await query
        .skip(start_from)
        .take(limit) 
        .getManyAndCount();

        return results;
        
    }

    async getCount(){

        const total_cnt = await this.i_repository.createQueryBuilder("products_img")
        .select("COUNT(products_img.id)", "cnt")
        .getRawOne();
    
        return {
          total_cnt : total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit : number){

        var start_from = (page-1) * limit;

        return await this.i_repository.createQueryBuilder("products_img")
        .skip(start_from)
        .take(limit) 
        .getMany();
    }

    async findItem(id : number){

        return await this.i_repository.createQueryBuilder("products_img")
        .leftJoinAndMapOne('products_img.product_id',ProductsEntity,'products','products_img.product_id = products.id')
        .where("products.id = :id", {id : id})
        .getOne();
    }
    

    async addItem(user: ProductsImgEntity) : Promise<ProductsImgEntity>{
        return await this.i_repository.save(user);
    }

    async editItem(data:any){

        // return await this.i_repository.update(data.id, { 
        //     name: data.name,
        //   });


      }

      async deleteItem(data:any){

        return await this.i_repository.delete(data.id);
  
        }


        async findItemByProductId(id : number){

            return await this.i_repository.createQueryBuilder("products_img")
            .leftJoinAndMapOne('products_img.product_id',ProductsEntity,'products','products_img.product_id = products.id')
            .where("products_img.product_id = :id", {id : id})
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
