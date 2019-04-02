## Описание структуры {docsify-ignore}

```
├── docs - директория где лежит вся документация
├── client/
|   ├── images/ - общие изображения. например, фавикон
|   ├── vendor.js - импорт полифилов
├── server/
|   ├── api/ - апи
|   ├── actions.js - сервер сайд экшины
|   ├── dev.js - dev сервер
|   ├── server.js - сервер
├── src/
│   ├── actions - экшины
│   ├── constants - константы
│   ├── css - общий css
│   ├── reducers - редьюсеры
│   ├── services - апи запросы
│   ├── store
│       ├── getStore.js - создание стора
│   ├── types
│       ├── types.js - типы экшинов
│   ├── ui
│       ├── components - компоненты
│       ├── hocs - декораторы
│       ├── pages - страницы для react router
│   ├── utils - общие утилиты
│   ├── App.jsx - приложение
│   ├── AppProvider.jsx - приложение с провайдером
├── utils/
|   ├── polyfill/ - полифилы
```
