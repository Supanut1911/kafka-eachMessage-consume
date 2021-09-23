import { Module } from '@nestjs/common';
import { ClientsModule, KafkaOptions, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafoptionModule } from './kafoption/kafoption.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
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
          run: {
            eachBatchAutoResolve: true,
          },
          consumer: {
            groupId: `AAA`,
          },
        },
      },
    ]),
    KafoptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
