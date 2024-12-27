import { Test, TestingModule } from '@nestjs/testing';
import { ProductKitsService } from './product_kits.service';

describe('ProductKitsService', () => {
  let service: ProductKitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductKitsService],
    }).compile();

    service = module.get<ProductKitsService>(ProductKitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
