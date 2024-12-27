import { Test, TestingModule } from '@nestjs/testing';
import { UserOrdersListController } from './user_orders_list.controller';

describe('UserOrdersListController', () => {
  let controller: UserOrdersListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOrdersListController],
    }).compile();

    controller = module.get<UserOrdersListController>(UserOrdersListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
