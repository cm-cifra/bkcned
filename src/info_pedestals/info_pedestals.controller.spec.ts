import { Test, TestingModule } from '@nestjs/testing';
import { InfoPedestalsController } from './info_pedestals.controller';

describe('InfoPedestalsController', () => {
  let controller: InfoPedestalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoPedestalsController],
    }).compile();

    controller = module.get<InfoPedestalsController>(InfoPedestalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
