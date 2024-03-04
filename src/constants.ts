import { KafkaOptions } from '@nestjs/microservices';

export const KAFKA_OPTION: KafkaOptions['options'] = {
  client: {
    clientId: 'nestjs',
    brokers: ['localhost:9092'],
  },
  consumer: {
    groupId: 'nestjs-consumer',
  },
  // run: {
  //   autoCommit: false,
  // },
};
