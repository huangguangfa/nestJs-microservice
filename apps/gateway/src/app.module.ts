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
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: 'SYSTEM_SERVICE',
    //   useFactory: (configService: ConfigService) => {
    //     const mathSvcOptions = configService.getMathSvcOptions();
    //     return ClientProxyFactory.create(mathSvcOptions);
    //   },
    //   inject: [ConfigService],
    // },
  ],
})
export class AppModule {}
