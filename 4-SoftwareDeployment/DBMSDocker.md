# Інструкція по установці PostgreSQL у Docker

## Крок 1. Завантаження образу PostgreSQL

```bash
docker pull postgres
```

Ця команда завантажить останню версію образу PostgreSQL з Docker Hub.

## Крок 2. Запуск контейнера PostgreSQL

```bash
docker run --name amitsy-postgres -p 5432:5432 -e POSTGRES_PASSWORD=1234 -w /scripts -v /${PWD}:/scripts -d --rm postgres
```

Ця команда запустить контейнер PostgreSQL з такими параметрами\:
  * --name amitsy-postgres: задає ім'я контейнера як "amitsy-postgres".
  * -p 5432:5432: прокидує порт 5432 з хоста на порт 5432 у контейнері.
  * -e POSTGRES_PASSWORD=1234: встановлює пароль для користувача "postgres".
  * -w /scripts: встановлює робочу директорію всередині контейнера як "/scripts".
  * -v /${PWD}:/scripts: мапить поточну директорію хоста у директорію "/scripts" всередині контейнера.

## Крок 3. Запуск оболонки Bash в контейнері

```bash
docker exec -it amitsy-postgres bash
```

Ця команда запустить інтерактивну оболонку Bash у контейнері "amitsy-postgres". Winpty може знадобитися для коректного відображення вводу та виводу в середовищі Windows.

## Крок 4. Створення бази даних та виконання SQL-скрипта

```bash
create database test3;
psql -U postgres -d test3 < /schema.sql
```

Ці команди створять базу даних "test3" і виконають SQL-скрипт, розташований за шляхом "/schema.sql" всередині контейнера.
