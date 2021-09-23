import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Consumer, Kafka, Producer } from 'kafkajs';

@Controller()
export class AppController implements OnModuleInit {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor(private readonly appService: AppService) {
    this.kafka = new Kafka({
      clientId: 'personB',
      brokers: ['localhost:29092'],
    });
    this.consumer = this.kafka.consumer({
      groupId: 'testX',
    });
    this.consumer.connect();
  }

  async onModuleInit() {
    this.consumeLang();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  async consumeLang() {
    this.consumer.subscribe({
      topic: 'language.getXYZABCD',
      fromBeginning: true,
    });

    this.consumer.run({
      eachMessage: async (result) => {
        let res = JSON.parse(`${result.message.value}`);
        console.log('from EachMessage=>', res);
      },
    });
  }

  // @MessagePattern('language.upsert')
  // async consumeLangUpsert(@Payload() message) {
  //   console.log(`[${Date.now()}]message from language upsert`, message.value);
  // }
}
