import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path'
import * as session from 'express-session'
import { ParseArrayPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(session({
    secret: "there is no secret yet just begining",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
  }))
  app.useStaticAssets(join(__dirname, '../public'))
  app.setBaseViewsDir(join(__dirname, '../views'))
  app.setViewEngine('ejs')

  await app.listen(80, () => { console.log('[+] server started at http://localhost:80') });
}
bootstrap();