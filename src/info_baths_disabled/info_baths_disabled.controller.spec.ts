import { Test, TestingModule } from '@nestjs/testing';
import { InfoBathsDisabledController } from './info_baths_disabled.controller';

describe('InfoBathsDisabledController', () => {
  let controller: InfoBathsDisabledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoBathsDisabledController],
    }).compile();

    controller = module.get<InfoBathsDisabledController>(InfoBathsDisabledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
