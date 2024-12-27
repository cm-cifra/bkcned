import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import { UsersEntity, UserTypesEntity } from 'src/entities'; // Assuming the entity is in src/entities

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity)
        private i_repository: Repository<UsersEntity>,
        private dataSource: DataSource
    ) { }

    // Utility function to hash passwords
    private async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10); // Generate a salt with a cost factor of 10
        return bcrypt.hash(password, salt); // Return the hashed password
    }

    async getAllByType(isActive: number) {
        return await this.i_repository.createQueryBuilder("users")
            .leftJoinAndMapOne('users.ut_id', UserTypesEntity, 'user_type', 'users.ut_id = user_type.id')
            .where('users.isActive = :isActive', { isActive: isActive })
            .orderBy('users.lname', 'ASC')
            .getMany();
    }

    checkEmailExisted(email: string): Promise<UsersEntity> {
        return this.i_repository.createQueryBuilder("users")
            .leftJoinAndMapOne('users.ut_id', UserTypesEntity, 'user_type', 'users.ut_id = user_type.id')
            .where("users.email  = :email", { email: email })
            .getOne();
    }

    async checkIfApproved(email: string) {
        return await this.i_repository.createQueryBuilder("users")
            .select(["users"])
            .where("users.email  = :email AND users.isApproved = :isApproved", { email: email, isApproved: 1 })
            .getOne();
    }

    async checkIfActive(email: string) {
        return await this.i_repository.createQueryBuilder("users")
            .select(["users"])
            .where("users.email  = :email AND users.isActive = :isActive", { email: email, isActive: 1 })
            .getOne();
    }
 
    async create(user: UsersEntity): Promise<UsersEntity> { 
        const hashedPassword = await this.hashPassword(user.password);
         
        const newUser = this.i_repository.create({
            ...user,
            password: hashedPassword,  
        });

        return await this.i_repository.save(newUser);  
    }  async findItem(id : number){

      return await this.i_repository.createQueryBuilder("users")
      .where("users.id = :id", {id : id})
      .getOne();
  }

}
