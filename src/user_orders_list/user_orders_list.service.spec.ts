import { Test, TestingModule } from '@nestjs/testing';
import { UserOrdersListService } from './user_orders_list.service';

describe('UserOrdersListService', () => {
  let service: UserOrdersListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOrdersListService],
    }).compile();

    service = module.get<UserOrdersListService>(UserOrdersListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
