## Description

[Nest](https://github.com/nestjs/nest) framework의 Kafka 기능을 소개합니다.

### Port 및 URL

- Kafka broker: localhost:9092
- Kafka ui: [http://localhost:8080](http://localhost:8080)
- Nest.js: [http://localhost:3000](http://localhost:3000)

### Request body (JSON)

- `/sum`
  - type: number[]
  - example:  `[1,2,3,4,5]`
- `/max`
  - type: number[]
  - example: `[1,2,3,4,5]`
- `/print`
  - type: { message:string }
  - example: `{"message": "Hello!!!"}`

## Installation

```bash
$ yarn
```

## Running docker

```bash
$ yarn docker:up
$ yarn docker:down
```

## Running the app

```bash
$ npm run start:dev
```
