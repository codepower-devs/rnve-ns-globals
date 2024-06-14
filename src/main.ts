import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { printInfo, printLogo } from './core/logger';

import packageJson from '../package.json';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
//import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3100,
      },
    },
  );

  // const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('Document rest')
  //   .setDescription('Description')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen();

  printLogo();
  printInfo({
    env: String(process.env.NODE_ENV),
    name: packageJson.name,
    port: process.env.PORT || '3000',
    version: packageJson.version,
    typeService: 'microservice',
  });
}

bootstrap();
