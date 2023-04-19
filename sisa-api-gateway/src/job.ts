import { NestFactory } from '@nestjs/core';
import { JobsModule } from './module/jobs/jobs.module';
import { JobsService } from './module/jobs/jobs.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(JobsModule);
  const jobsService = app.get(JobsService);

  await jobsService.run();

  await app.close();
}
bootstrap();
