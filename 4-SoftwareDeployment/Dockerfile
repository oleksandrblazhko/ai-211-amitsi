FROM postgres
LABEL descriptoin="Test Docker for PostgreSQL"
LABEL maintainer="Denys Amitsy"
LABEL version="1.0"

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 1234
ENV POSTGRES_DB amitsydb
COPY ./schema.sql /docker-entrypoint-initdb.d
