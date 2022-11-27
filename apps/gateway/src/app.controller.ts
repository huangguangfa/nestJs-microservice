import { Controller, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export class AppController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly client: ClientProxy) {}

  @Post('list')
  async getHello() {
    return this.client.send({ cmd: 'menu' }, 1);
  }
}
