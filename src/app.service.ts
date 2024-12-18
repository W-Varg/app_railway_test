import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World! desde NestJS para Railway para que vean Wilber y Jonatan',
      fecha: new Date(),
      version: '1.0.0',
      estudiante: ['Wilber', 'Jonatan'],
    };
  }
}
