import { Injectable } from '@nestjs/common';

@Injectable()
export class NestServiceService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
