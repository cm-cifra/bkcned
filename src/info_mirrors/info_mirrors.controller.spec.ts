import { Test, TestingModule } from '@nestjs/testing';
import { InfoMirrorsController } from './info_mirrors.controller';

describe('InfoMirrorsController', () => {
  let controller: InfoMirrorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoMirrorsController],
    }).compile();

    controller = module.get<InfoMirrorsController>(InfoMirrorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
