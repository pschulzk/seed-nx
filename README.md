# PSK Seed Nx

## Description

A monorepository template based on [Nrwl/Nx](https://nx.dev/) set up for [Angular](https://angular.io/) with [Angular Material](https://material.angular.io/), [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/) using [PostgreSQL](https://www.postgresql.org/).

## Prerequisites

- [NodeJS](https://nodejs.org/en/blog/release/v18.12.0) >= 18.12.0 < 19
- [Docker Compose](https://github.com/docker/compose)
- [npx](https://www.npmjs.com/package/npx) (optional)

## Structure

- Angular frontend application `/apps/psk-ui` at http://localhost:4200/
- NestJS backend application `/apps/psk-api` at http://localhost:3000/api
- npm library `@psk/psk-lib` at `/libs/psk-lib`
- Dockerized PostgreSQL database `psk` configured in [apps/psk-api/.env](apps/psk-api/.env) and [docker-compose.yml](docker-compose.yml) at localhost:5432/psk

## How to run

Install dependencies within repository folder:

```
npm ci
```

Boot Docker container containing sample database for sample backend app:

```
docker-compose up -d
```

Run backend app:

```
npm run serve-api
```

In another CLI instance, run frontend app:

```
npm run serve-ui
```

This command also executes `npm run generate-api-lib` which reads `dist/apps/psk-api/api-swagger-spec.json` to generate and store interfaces, modules and services in `@psk/psk-lib` consumed by `psk-ui`.

See sample UI at http://localhost:4200/

See API Docs at http://localhost:3000/api/docs

Run unit tests:

```
npm run test:watch psk-ui
```

```
npm run test:watch psk-api
```

## How to add new frontend app

```
npx nx g @nx/angular:application
```

## How to add new backend app

Add new NestJS app:

```
npx nx g @nx/nest:application
```

### Define new Entity

#### Define schema

In [apps/psk-api/prisma/schema.prisma](apps/psk-api/prisma/schema.prisma), e. g.

```
model MyEntity {
  id       String  @id @default(uuid())
  name     String
}
```

To apply schema changes to the Prisma init and migration process, run:

```
npx dotenv -e apps/{YOUR_APP_NAME}/.env -- npx prisma migrate dev --schema apps/{YOUR_APP_NAME}/prisma/schema.prisma
```

Because of the Nx folder structure [dotenv-cli](https://github.com/entropitor/dotenv-cli#dotenv-cli) is required to pass environment variable from [apps/psk-api/.env](apps/psk-api/.env) to Prisma CLI.

Use [nestjs-prisma-crud](https://kepelrs.github.io/nestjs-prisma-crud/) to generate new CRUD templates for entities:

```
npx nx g -c nestjs-prisma-crud-schematics crud-resource
```

Generate interfaces, modules and services to corresponding library for Angular apps to consume:

```
npm run generate-api-lib
```

This is configured in [psk-api-openapi-gen.json](psk-api-openapi-gen.json).

## How to add new library

```
npx nx g @nx/node:library
```
