import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [
          'localhost:29092',
          'localhost:29093',

          // process.env.KAFKA_BROKER_2,
          // process.env.KAFKA_BROKER_3,
        ],
      },
      consumer: {
        groupId: 'BBB',
      },
    },
  });
  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
