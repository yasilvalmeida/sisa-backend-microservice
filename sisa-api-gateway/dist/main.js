"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const port = 8000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SISA API Gateway')
        .setDescription('The SISA API Gateway Description')
        .setVersion('1.0')
        .addTag('SISA')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-doc', app, document);
    await app.listen(port, () => {
        console.log(`SISA API Gateway Running on ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map