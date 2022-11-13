import { Test, TestingModule } from '@nestjs/testing';
import { SystemCenterController } from './system-center.controller';
import { SystemCenterService } from './system-center.service';

describe('SystemCenterController', () => {
  let systemCenterController: SystemCenterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SystemCenterController],
      providers: [SystemCenterService],
    }).compile();

    systemCenterController = app.get<SystemCenterController>(SystemCenterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(systemCenterController.getHello()).toBe('Hello World!');
    });
  });
});
