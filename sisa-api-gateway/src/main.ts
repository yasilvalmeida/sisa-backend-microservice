import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
    exposedHeaders: 'X-Token-Expired',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const port = configService.get<number>('PORT');
  const configSwagger = new DocumentBuilder()
    .setTitle('SISA API Gateway')
    .setDescription('The SISA API Gateway Description')
    .setVersion('1.0')
    .addTag('SISA')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(port, () => {
    console.log(`SISA API Gateway Running on ${port}`);
  });
}
bootstrap();
