import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryOptionController } from './delivery_option.controller';

describe('DeliveryOptionController', () => {
  let controller: DeliveryOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryOptionController],
    }).compile();

    controller = module.get<DeliveryOptionController>(DeliveryOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
