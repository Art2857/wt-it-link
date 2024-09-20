## Description

Задание для бэкенд-разработчика

У вас есть модель и контроллер на PHP, которые позволяют получать список цветов из базы данных и искать цвет по его названию. В базе данных хранится информация о цветах в следующем формате:

    id: 1
    c_name: "Yellow"
    c_hex: "#FFFF00"
    c_rgb: "rgb(255, 255, 0)"

(всего 4 колонки)

Вам нужно перенести этот функционал в модуль NestJS, используя TypeORM для работы с базой данных.

Требуется реализовать:

    Получение полного списка цветов без пагинации.
    Получение списка цветов с пагинацией (по 5 цветов на страницу).
    Получение одного цвета по названию (например, "yellow").

Структура: - Модель (Entity):
Создайте модель (Entity) для таблицы цветов, используя TypeORM.

     - Сервис (Service):
        Создайте сервис для взаимодействия с базой данных.
        Реализуйте методы для получения полного списка цветов, списка с пагинацией и поиска по названию.

     - Резолвер (Resolver):
        Создайте резолверы для обработки запросов.
        В резолверах используйте методы сервиса для выполнения запросов к базе данных.

## Installation

```bash
$ yarn install
```

## Prepare for dev-launch

```bash
$ docker-compose -f ./docker-compose.database.yml up -d
$ yarn typeorm:migration:run
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

# docker mode
$ docker-compose up
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Typeorm Migration

```bash
$ yarn typeorm:migration ./migrations/$name
```
