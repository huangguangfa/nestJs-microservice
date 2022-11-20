import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
