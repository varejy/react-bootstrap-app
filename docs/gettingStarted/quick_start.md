## Разработка
`yarn` - устанавливаем зависимости

`yarn server` - запустить сервер на 3000 порте

`yarn static` - запустить dev сервер на 4000 порте

## Сборка

`yarn build:static:dev` - собрать статику в dev режиме

`yarn build:static:prod` - собрать статику в prod режиме

`yarn build:server:dev` - собрать файлы сервера в dev режиме

`yarn build:server:prod` - собрать файлы сервера в prod режиме

## Запуск

`yarn start:dev` - собрать и запустить сайт в dev режиме

`yarn start:prod` - собрать и запустить сайт в prod режиме

`yarn start:server` - запустить собранный сервер

`yarn start:forever:server` - запустить сервер в фоновом режиме

`yarn stop:forever:server` - выключить сервер, запущенный в фоновом режиме

`yarn deploy` - деплой приложения на прод

### Тесты

`yarn lint` - запустить линтер

`yarn lint-fix` - автоматический фикс линт ошибок

## Дока

1. `yarn global add docsify-cli` - ставим глобально пакет `docsify-cli` (выполняем только при первом старте).
2. `yarn docs` - стартуем доку на 3000 порту.
