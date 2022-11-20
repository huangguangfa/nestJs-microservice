import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export class AppController {
  constructor(@Inject('SYSTEM_SERVICE') private client: ClientProxy) {}

  @Get('list')
  async getHello() {
    return this.client.send('systemMenuList', '1');
  }
}
