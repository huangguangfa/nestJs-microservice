import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import fastify from 'fastify';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { TransformInterceptor } from '../../../libs/common/src/interceptors/transform.interceptor';
import { AllExceptionsFilter } from '../../../libs/common/src/exceptions/base.exception.filter';
import { HttpExceptionFilter } from '../../../libs/common/src/exceptions/http.exception.filter';
import { FastifyLogger } from '../../../libs/logger';
import { generateDocument } from '../../..//doc';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const fastifyInstance = fastify({
    logger: FastifyLogger,
  });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyInstance),
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

  await app.listen(3000);
}

bootstrap();
