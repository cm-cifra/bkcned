import { Test, TestingModule } from '@nestjs/testing';
import { ProductsImgService } from './products_img.service';

describe('ProductsImgService', () => {
  let service: ProductsImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsImgService],
    }).compile();

    service = module.get<ProductsImgService>(ProductsImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
