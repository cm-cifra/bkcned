import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { ProductsEntity } from './products.entity';
import { CategoriesEntity, CollectionsEntity, ProductsImgEntity } from 'src/entities';
import { I18nService } from 'nestjs-i18n';
@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly i_repository: Repository<ProductsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll(page: number, limit: number) {

        var start_from = (page - 1) * limit;

        const query = this.i_repository.createQueryBuilder('products');

        query.leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .where('products.isTrash = 0')

        const results = await query
            .orderBy('products.datetime_added', 'DESC')
            .skip(start_from)
            .take(limit)
            .getManyAndCount();

        return results;

    }

    async getCount() {

        const total_cnt = await this.i_repository.createQueryBuilder("products")
            .select("COUNT(products.id)", "cnt")
            .getRawOne();

        return {
            total_cnt: total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit: number) {

        var start_from = (page - 1) * limit;

        return await this.i_repository.createQueryBuilder("products")
            .orderBy('products.description', 'ASC')
            .skip(start_from)
            .take(limit)
            .getMany();
    }

    async findItem(id: number) {

        return await this.i_repository.createQueryBuilder("products")
            .leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .leftJoinAndMapMany('products.sub_imgs', ProductsImgEntity, 'product_imgs', 'products.id = product_imgs.product_id')
            .where("products.id = :id", { id: id })
            .getOne();
    }

    async addItem(user: ProductsEntity): Promise<ProductsEntity> {
        return await this.i_repository.save(user);
    }

    async editItem(data: any) {

        return await this.i_repository.update(data.id, {
            name: data.name,
            sku: data.sku,
            factory_part_num: data.factory_part_num,
            category_id: data.category_id,
            collection_id: data.collection_id,
            price: data.price,
            product_img: data.product_img,
        });


    }

    async deleteItem(data: any) {

        return await this.i_repository.delete(data.id);

    }


    async searchName(name: string) {

        return await this.i_repository.createQueryBuilder("products")
            .where("products.name LIKE :name", { name: `%${name}%` })
            .getMany();
    } async searchNotName(name: string) {
        return await this.i_repository.createQueryBuilder("products")
            .where("products.name LIKE :name", { name: `%${name}%` })
            .groupBy("products.width")
            .orderBy("products.width","DESC")
            .getMany();
    }
    async searchSKU(sku: string) {

        return await this.i_repository.createQueryBuilder("products")
            .where("products.sku LIKE :sku", { sku: `%${sku}%` })
            .getMany();
    }

    async findItemByIds(sku: string, factory_part_num: string) {

        return await this.i_repository.createQueryBuilder("products")
            .where("products.sku = :sku AND products.factory_part_num = :factory_part_num", { sku: sku, factory_part_num: factory_part_num })
            .getOne();
    }

    async findItemByCollection(collection_id: number, page: number, limit: number) {

        var start_from = (page - 1) * limit;

        const query = this.i_repository.createQueryBuilder('products');

        query.leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .where("products.collection_id = :collection_id", { collection_id: collection_id })
            .andWhere('products.isTrash = 0')

        const results = await query
            .orderBy('products.datetime_added', 'DESC')
            .skip(start_from)
            .take(limit)
            .getManyAndCount();

        return results;

    }

    async findItemByCategory(category_id: number, page: number, limit: number) {

        var start_from = (page - 1) * limit;

        const query = this.i_repository.createQueryBuilder('products');

        query.leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .where("products.category_id = :category_id", { category_id: category_id })
            .andWhere('products.isTrash = 0')

        const results = await query
            .orderBy('products.datetime_added', 'DESC')
            .skip(start_from)
            .take(limit)
            .getManyAndCount();

        return results;

    }

    async findItemBySKU(sku: string) {

        return await this.i_repository.createQueryBuilder("products")
            .leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .leftJoinAndMapMany('products.sub_imgs', ProductsImgEntity, 'product_imgs', 'products.id = product_imgs.product_id')
            .where("products.sku = :sku", { sku: sku })
            .getOne();
    }

    async searchNameToAddKit(name: string) {

        return await this.i_repository.createQueryBuilder("products")
            .leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .where("(products.name LIKE :name OR products.sku LIKE :name)", { name: `%${name}%` })
            .andWhere("category.description != 'Kits'")
            .orderBy("products.sku", "ASC")
            .getMany();
    }

    async searchNameWithTags(name: string, data: any) {

        const query = this.i_repository.createQueryBuilder('products');

        query.leftJoinAndMapOne('products.category_id', CategoriesEntity, 'category', 'products.category_id = category.id')
            .leftJoinAndMapOne('products.collection_id', CollectionsEntity, 'collection', 'products.collection_id = collection.id')
            .where('products.isTrash = 0')
            .andWhere("products.name LIKE :name", { name: `%${name}%` })

        if (data) {
            for (var i = 0; i < data.length; i++) {
                query.orWhere("products.category_id = :category_id", { category_id: data[i].id })
            }
        }

        const results = await query
            .orderBy('products.name', 'ASC')
            .getManyAndCount();

        return results;
    }
    async createBulk(user: ProductsEntity[]): Promise<ProductsEntity[]> {
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
