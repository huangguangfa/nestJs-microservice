import { Controller, Get } from '@nestjs/common';
import { SystemCenterService } from './system-center.service';

@Controller()
export class SystemCenterController {
  constructor(private readonly systemCenterService: SystemCenterService) {}

  @Get()
  getHello(): string {
    return this.systemCenterService.getHello();
  }
}
