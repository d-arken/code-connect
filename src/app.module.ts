import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerguntasModule } from './perguntas/perguntas.module';

@Module({
  imports: [PerguntasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
