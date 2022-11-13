import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleProviders } from './role.providers';

import { DatabaseModule } from '../../../../libs/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [...RoleProviders, RoleService],
  exports: [RoleService],
})
export class RoleModule {}
