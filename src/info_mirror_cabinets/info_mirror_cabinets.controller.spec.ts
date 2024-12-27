import { Test, TestingModule } from '@nestjs/testing';
import { InfoMirrorCabinetsController } from './info_mirror_cabinets.controller';

describe('InfoMirrorCabinetsController', () => {
  let controller: InfoMirrorCabinetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoMirrorCabinetsController],
    }).compile();

    controller = module.get<InfoMirrorCabinetsController>(InfoMirrorCabinetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
