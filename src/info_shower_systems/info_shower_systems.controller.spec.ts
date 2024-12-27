import { Test, TestingModule } from '@nestjs/testing';
import { InfoShowerSystemsController } from './info_shower_systems.controller';

describe('InfoShowerSystemsController', () => {
  let controller: InfoShowerSystemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoShowerSystemsController],
    }).compile();

    controller = module.get<InfoShowerSystemsController>(InfoShowerSystemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
