import { Test, TestingModule } from '@nestjs/testing';
import { ProductKitsController } from './product_kits.controller';

describe('ProductKitsController', () => {
  let controller: ProductKitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductKitsController],
    }).compile();

    controller = module.get<ProductKitsController>(ProductKitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
