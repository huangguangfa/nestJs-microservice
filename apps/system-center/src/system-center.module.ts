import { Module } from '@nestjs/common';
import { SystemCenterController } from './system-center.controller';
import { SystemCenterService } from './system-center.service';

@Module({
  imports: [],
  controllers: [SystemCenterController],
  providers: [SystemCenterService],
})
export class SystemCenterModule {}
