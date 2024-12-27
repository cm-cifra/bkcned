import { Test, TestingModule } from '@nestjs/testing';
import { UserCartsService } from './user_carts.service';

describe('UserCartsService', () => {
  let service: UserCartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCartsService],
    }).compile();

    service = module.get<UserCartsService>(UserCartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
