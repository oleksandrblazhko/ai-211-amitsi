# Налаштувати виконання розглянутої програми через Docker

## Крок 1. Завантаження образу Node

```
docker pull node
```

## Крок 2. Запускаємо програмний файл
```bash
docker run -it --rm --name my-running-script -v "C:\Users\nmskorpo\Downloads\nodejsprj":/usr/src/app -w /usr/src/app node:19-bullseye node app.js
```

