import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, DataSource, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InfoPedestalsEntity } from './info_pedestals.entity';

@Injectable()
export class InfoPedestalsService {
    constructor(
        @InjectRepository(InfoPedestalsEntity)
        private readonly i_repository: Repository<InfoPedestalsEntity>,
        private dataSource: DataSource
    ) { }

    async getAll() {

        return await this.i_repository.createQueryBuilder("info_pedestals")
            .orderBy('info_pedestals.description', 'ASC')
            .getMany();
    }

    async getCount() {

        const total_cnt = await this.i_repository.createQueryBuilder("info_pedestals")
            .select("COUNT(info_pedestals.id)", "cnt")
            .getRawOne();

        return {
            total_cnt: total_cnt.cnt,
        };
    }

    async getAllByPage(page: number, limit: number) {

        var start_from = (page - 1) * limit;

        return await this.i_repository.createQueryBuilder("info_pedestals")
            .orderBy('info_pedestals.description', 'ASC')
            .skip(start_from)
            .take(limit)
            .getMany();
    }

    async findItem(id: number) {

        return await this.i_repository.createQueryBuilder("info_pedestals")
            .where("info_pedestals.id = :id", { id: id })
            .getOne();
    }

    async addItem(user: InfoPedestalsEntity): Promise<InfoPedestalsEntity> {
        return await this.i_repository.save(user);
    }

    async editItem(data: any) {

        return await this.i_repository.update(data.id, {
            brand_name: data.brand_name,
            style: data.style,
            dimensions: data.dimensions,
            color_cabinet: data.color_cabinet,
            color_fittings: data.color_fittings,
            material_cabinet_facade: data.material_cabinet_facade,
            material_cabinet_body: data.material_cabinet_body,
            covering: data.covering,
            storage_system: data.storage_system,
            installation: data.installation,
            fittings_with_closer_mechanism: data.fittings_with_closer_mechanism,
            guarantee: data.guarantee,
            product_weight: data.product_weight,
            package_weight: data.package_weight,
            scheme: data.scheme,
            datetime_modified: data.datetime_modified,
        });

    }

    async deleteItem(data: any) {

        return await this.i_repository.delete(data.id);

    }


    async searchName(name: string) {
        return await this.i_repository.createQueryBuilder("info_pedestals")
            .where("info_pedestals.description LIKE :name", { name: `%${name}%` })
            .groupBy("info_pedestals.color_cabinet")
            .orderBy("info_pedestals.color_cabinet", "DESC")
            .getMany();
    }
  async searchItems(filters: { dimensions?: string; color_cabinet?: string }) {
    const query: any = {};

    // Add filters to the query object
    if (filters.dimensions) {
        query.dimensions = filters.dimensions;
    }

    if (filters.color_cabinet) {
        query.color_cabinet = filters.color_cabinet;
    }

    // If no filters are provided, return all items
    if (Object.keys(query).length === 0) {
        return await this.i_repository.find();
    }

    // Apply AND logic using a single `where` object
    return await this.i_repository.find({
        where: query,
    });
}

    async findItemByProduct(id: number) {

        return await this.i_repository.createQueryBuilder("info_pedestals")
            .where("info_pedestals.product_id = :id", { id: id })
            .getMany();
    }

    async createBulk(user: InfoPedestalsEntity[]): Promise<InfoPedestalsEntity[]> {
        return this.i_repository.save(user);
    }


}
