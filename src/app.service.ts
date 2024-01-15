import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' Here we are >>>>2ooo Kubik <<<<<!';
  }
}
