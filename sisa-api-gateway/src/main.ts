import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8000;
  const config = new DocumentBuilder()
    .setTitle('SISA API Gateway')
    .setDescription('The SISA API Gateway Description')
    .setVersion('1.0')
    .addTag('SISA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(port, () => {
    console.log(`SISA API Gateway Running on ${port}`);
  });
}
bootstrap();
