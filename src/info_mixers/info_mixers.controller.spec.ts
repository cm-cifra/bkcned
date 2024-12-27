import { Test, TestingModule } from '@nestjs/testing';
import { InfoMixersController } from './info_mixers.controller';

describe('InfoMixersController', () => {
  let controller: InfoMixersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoMixersController],
    }).compile();

    controller = module.get<InfoMixersController>(InfoMixersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
