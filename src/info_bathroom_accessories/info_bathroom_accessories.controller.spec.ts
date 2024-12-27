import { Test, TestingModule } from '@nestjs/testing';
import { InfoBathroomAccessoriesController } from './info_bathroom_accessories.controller';

describe('InfoBathroomAccessoriesController', () => {
  let controller: InfoBathroomAccessoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoBathroomAccessoriesController],
    }).compile();

    controller = module.get<InfoBathroomAccessoriesController>(InfoBathroomAccessoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
