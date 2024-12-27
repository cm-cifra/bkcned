import { Test, TestingModule } from '@nestjs/testing';
import { ProductsImgController } from './products_img.controller';

describe('ProductsImgController', () => {
  let controller: ProductsImgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsImgController],
    }).compile();

    controller = module.get<ProductsImgController>(ProductsImgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
