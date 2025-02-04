import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryOptionService } from './delivery_option.service';

describe('DeliveryOptionService', () => {
  let service: DeliveryOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryOptionService],
    }).compile();

    service = module.get<DeliveryOptionService>(DeliveryOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
