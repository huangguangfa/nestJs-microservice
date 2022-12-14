import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { fastifyInstance } from './fastifyInstance';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { TransformInterceptor } from '@app/common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from '@app/common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from '@app/common/exceptions/http.exception.filter';

import { generateDocument } from '../../../doc';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyInstance()),
  );
  // micro serivce
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        port: 4100,
        host: '0.0.0.0',
      },
    },
    {
      inheritAppConfig: true, // 继承 app 配置
    },
  );
  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());
  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  // 创建文档
  generateDocument(app);
  // 添加热更新
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // 启动所有微服务
  await app.startAllMicroservices();
  await app.listen(4000);
}

bootstrap();
