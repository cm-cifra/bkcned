import { Test, TestingModule } from '@nestjs/testing';
import { InfoKitchenSinkController } from './info_kitchen_sink.controller';

describe('InfoKitchenSinkController', () => {
  let controller: InfoKitchenSinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoKitchenSinkController],
    }).compile();

    controller = module.get<InfoKitchenSinkController>(InfoKitchenSinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
