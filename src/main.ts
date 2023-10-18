import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()

    .setTitle('Loyalty API')

    .setDescription('Programa de Fidelização da SparkTech')

    .setVersion('0.1')
    .addBearerAuth()
    .setContact(
      'Sparktech',
      'https://www.sparktech.co.ao',
      'fdiasandre@gmail.com',
    )

    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(80);
}
bootstrap();
