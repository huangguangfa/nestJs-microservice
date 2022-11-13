import { Module } from '@nestjs/common';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '../../../libs/utils/index';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
