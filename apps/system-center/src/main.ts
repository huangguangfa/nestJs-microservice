import { NestFactory } from '@nestjs/core';
import { SystemCenterModule } from './system-center.module';

async function bootstrap() {
  const app = await NestFactory.create(SystemCenterModule);
  await app.listen(3001);
}
bootstrap();
