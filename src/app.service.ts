import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const autenticado = true;
    if (!autenticado) {
      return { saudação: 'não quero falar com você' };
    }

    return { saudação: 'hello world' };
  }
}
