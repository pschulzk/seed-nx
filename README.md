# PSK Seed Nx

## Description
A monorepository template based on [Nrwl/Nx](https://nx.dev/) configured with [Angular](https://angular.io/), [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/).

## Prerequisites

* [NodeJS](https://nodejs.org/en/blog/release/v18.12.0) >= 18.12.0 < 19
* [Docker Compose](https://github.com/docker/compose)
* [npx](https://www.npmjs.com/package/npx) for convenience


## How to run

Install dependencies within repository folder:
```
npm clean install
```

Boot Docker container containing sample database for sample backend app:
```
docker-compose up -d
```

Run backend app:
```
npm run serve-be
```

In another CLI instance, run frontend app:
```
npm run serve-fe
```

See sample UI at http://localhost:4200/

See API Docs at http://localhost:3000/api/docs

## How to add new frontend app
```
npx nx g @nx/angular:application
```

## How to add new backend app
Add new NestJS app:
```
npx nx g @nx/node:application
```

### Define new Entity

#### Define schema

In `apps/psk-be/prisma/schema.prisma`, e. g.
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
Because of the Nx folder structure `dotenv` is required to pass environment variable from `.env` to Prisma CLI.

Use [nestjs-prisma-crud](https://kepelrs.github.io/nestjs-prisma-crud/) to generate new CRUD templates for entities:
```
npx nx g -c nestjs-prisma-crud-schematics crud-resource
```

## How to add new library
```
npx nx g @nx/node:library
```
