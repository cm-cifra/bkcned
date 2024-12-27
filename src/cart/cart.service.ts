import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CategoriesEntity, CollectionsEntity, ProductsEntity, CartsEntity, UsersEntity,
     InfoBathRoomAccessoriesEntity, InfoCounterTopSinkEntity, InfoBathsDisabledEntity, 
     InfoKitchenSinkEntity, InfoKitsEntity, InfoMirrorCabinetsEntity, InfoMirrorsEntity,
      InfoMixersEntity, InfoPedestalsEntity, InfoShowerSystemsEntity,
      UserCartsEntity, } from 'src/entities';
@Injectable()
export class CartService {
  constructor(
         @InjectRepository(CartsEntity)
         private readonly i_repository: Repository<CartsEntity>,
         private dataSource: DataSource
     ) { }
 
     async getAll(page: number, limit: number) {
 
         var start_from = (page - 1) * limit;
 
         const query = this.i_repository.createQueryBuilder('carts');
 
         query.leftJoinAndMapOne('carts.user_id', UsersEntity, 'user', 'carts.user_id = user.id')
             .leftJoinAndMapOne('carts.product_id', ProductsEntity, 'product', 'carts.product_id = product.id')
             .leftJoinAndMapOne('carts.user_cart_id', UserCartsEntity, 'usercart', 'carts.user_cart_id = usercart.id')
 
         const results = await query
             .orderBy('carts.datetime_added', 'DESC')
             .skip(start_from)
             .take(limit)
             .getManyAndCount();
 
         return results;
 
     }
 
     async getCount() {
 
         const total_cnt = await this.i_repository.createQueryBuilder("carts")
             .select("COUNT(carts.id)", "cnt")
             .getRawOne();
 
         return {
             total_cnt: total_cnt.cnt,
         };
     }
 
     async getAllByPage(page: number, limit: number) {
 
         var start_from = (page - 1) * limit;
 
         return await this.i_repository.createQueryBuilder("carts")
             .orderBy('carts.description', 'ASC')
             .skip(start_from)
             .take(limit)
             .getMany();
     }
 
     async findItem(id: number) {
 
         return await this.i_repository.createQueryBuilder("carts") 
             .leftJoinAndMapOne('carts.user_id', UsersEntity, 'user', 'carts.user_id = user.id')
             .leftJoinAndMapOne('carts.product_id', ProductsEntity, 'product', 'carts.product_id = product.id')
 
             .where("carts.id = :id", { id: id })
             .getOne();
     }
 
     async addItem(user: CartsEntity): Promise<CartsEntity> {
         return await this.i_repository.save(user);
     }
 
     async editItemId(id: number, data: any) {
         return await this.i_repository.update(id, {
             quantity: data.quantity,
             status: data.status,
             type: data.type,
             datetime_added:data.date
         });
     }
     async editItem(data: any) { }
 
     async deleteItem(data: any) {
 
         return await this.i_repository.delete(data.id);
 
     }
 
 
     async searchName(name: string) {
 
         return await this.i_repository.createQueryBuilder("carts")
             .where("carts.description LIKE :name", { name: `%${name}%` })
             .getMany();
     }
 
     async findByType(user_id: number, type: number, page: number, limit: number) {
 
         var start_from = (page - 1) * limit;
 
         const query = this.i_repository.createQueryBuilder('carts');
 
         query.leftJoinAndMapOne('carts.user_id', UsersEntity, 'user', 'carts.user_id = user.id')
         query.leftJoinAndMapOne('carts.product_id', ProductsEntity, 'product', 'carts.product_id = product.id')
             .where("carts.type = :type AND carts.user_id = :user_id", { type: type, user_id: user_id })
 
 
         const results = await query
             .orderBy('carts.datetime_added', 'DESC')
             .skip(start_from)
             .take(limit)
             .getManyAndCount();
 
         return results;
 
     }
 
     async findByUser(user_id: number, type: number, status: number, product_id: number) {
         const query = this.i_repository.createQueryBuilder('carts');
 
         query
             .leftJoinAndMapOne('carts.user_id', UsersEntity, 'user', 'carts.user_id = user.id')
             .leftJoinAndMapOne('carts.product_id', ProductsEntity, 'product', 'carts.product_id = product.id')
             .where("carts.type = :type AND carts.user_id = :user_id  AND carts.status = :status AND carts.product_id = :product_id ", { type: type, user_id: user_id, status: status, product_id: product_id })
 
             .orderBy('carts.datetime_added', 'DESC');
 
         const result = await query.getOne();
 
         return result || null;
     }
 
 
 
}
