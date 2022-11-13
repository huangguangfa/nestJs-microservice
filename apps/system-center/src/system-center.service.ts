import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemCenterService {
  getHello(): string {
    return 'Hello World!';
  }
}
