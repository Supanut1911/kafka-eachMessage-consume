import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafoptionController } from './kafoption.controller';
import { KafoptionService } from './kafoption.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:29092', 'localhost:29093'],
          },
          consumer: {
            groupId: `kafkaOptionGroup`,
          },
          run: {},
        },
      },
    ]),
  ],
  controllers: [KafoptionController],
  providers: [KafoptionService],
})
export class KafoptionModule {}
