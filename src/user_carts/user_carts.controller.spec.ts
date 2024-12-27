import { Test, TestingModule } from '@nestjs/testing';
import { UserCartsController } from './user_carts.controller';

describe('UserCartsController', () => {
  let controller: UserCartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCartsController],
    }).compile();

    controller = module.get<UserCartsController>(UserCartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
