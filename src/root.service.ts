import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  getHello(): string {
    return `Welcomes You`;
  }
}