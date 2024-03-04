import {
  Controller,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import {
  ClientKafka,
  Ctx,
  EventPattern,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppMessageController implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.kafkaClient.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.kafkaClient.close();
  }

  @MessagePattern('sum')
  replySum(@Payload() message: number[]): number {
    return message.reduce((a, b) => a + b);
  }

  @MessagePattern('max')
  replyMax(@Payload() message: number[]): number {
    return Math.max(...message);
  }

  @EventPattern('print')
  printEvent(@Payload() message: string): void {
    console.log('print:', message);
  }

  // @EventPattern('print')
  // async printEvent(
  //   @Payload() message: string,
  //   @Ctx() context: KafkaContext,
  // ): Promise<void> {
  //   console.log('print:', message);
  //   const { offset } = context.getMessage();
  //   const partition = context.getPartition();
  //   const topic = context.getTopic();
  //   await this.kafkaClient.commitOffsets([{ topic, partition, offset }]);
  // }
}
