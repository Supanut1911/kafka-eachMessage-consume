import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import {
  ClientKafka,
  EventPattern,
  KafkaOptions,
  MessagePattern,
  MicroserviceOptions,
  Payload,
} from '@nestjs/microservices';
import { Consumer } from '@nestjs/microservices/external/kafka.interface';

@Controller('kafoption')
export class KafoptionController implements OnModuleInit {
  kafkaconsumer: Consumer;

  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    // console.log(this.clientKafka.);
  }

  // @MessagePattern('language.getX')
  // getRefresh() {
  //   let x = this.clientKafka.createResponseCallback();
  //   console.log('x =>', x.toString());

  //   // this.options.run || {},
  //   //   {
  //   //     eachMessage: async ({ topic, partition, message }) => {
  //   //       console.log('Received message', {
  //   //         topic,
  //   //         partition,
  //   //         key: message.key.toString(),
  //   //         value: message.value.toString(),
  //   //       });
  //   //     },
  //   //   };
  // }

  // @EventPattern('language.getX')
  @EventPattern('language.getXYZABC')
  async getRefresh(@Payload() message) {
    console.log(`[${Date.now()}] message =>`, message.value);
  }
}

// import {  KafkaOptions } from '@nestjs/microservices';
// ...
// constructor(protected readonly options: KafkaOptions['options']){}
// ...

// public xxx(){
//  this.options.run || {}, {
//       eachMessage: async ({ topic, partition, message }) => {
//         console.log('Received message', {
//           topic,
//           partition,
//           key: message.key.toString(),
//           value: message.value.toString()
//         })
//       }
//     };
// }
