import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaceModule } from './face/face.module';

@Module({
  imports: [FaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
