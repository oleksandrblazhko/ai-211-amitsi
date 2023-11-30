# Налаштувати виконання розглянутої програми через Docker

## Крок 1. Створення Dockerfile у проєкті

```
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "app.js"]
```

## Крок 2. Білдимо
```bash
docker build -t nodeprj .
```

## Крок 3. Запускаємо
```bash
docker run nodeprj
```

