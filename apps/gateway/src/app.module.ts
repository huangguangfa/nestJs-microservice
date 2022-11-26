import { Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SYSTEM_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 8200,
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
