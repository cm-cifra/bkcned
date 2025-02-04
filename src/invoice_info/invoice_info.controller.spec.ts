import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceInfoController } from './invoice_info.controller';

describe('InvoiceInfoController', () => {
  let controller: InvoiceInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceInfoController],
    }).compile();

    controller = module.get<InvoiceInfoController>(InvoiceInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
