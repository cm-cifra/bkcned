import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeMenuService } from './user_type_menu.service';

describe('UserTypeMenuService', () => {
  let service: UserTypeMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypeMenuService],
    }).compile();

    service = module.get<UserTypeMenuService>(UserTypeMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
