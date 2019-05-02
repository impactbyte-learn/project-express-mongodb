# Project Express MongoDB

## Pre-Install

```sh
yarn global add express-generator
express --help
```

```sh
mkdir project-express-mongodb
cd project-express-mongodb
express --no-view --git .
```

## Setup and Install

```sh
yarn setup
```

Then fill the variables in `.env` file.

```
yarn
```

Make sure the `node_modules` are installed

## Development

```sh
yarn dev
```

## Production

```sh
yarn start
```

## REST API Endpoints

### Users

| Route        | HTTP     | Description                   |
| ------------ | -------- | ----------------------------- |
| `/users`     | `GET`    | Get all users                 |
| `/users/:id` | `GET`    | Get one user                  |
| `/users`     | `POST`   | Post a new user               |
| `/users`     | `DELETE` | Remove all users              |
| `/users/:id` | `DELETE` | Remove one user               |
| `/users/:id` | `PUT`    | Update one user with new data |

### Todos

| Route        | HTTP     | Description                   |
| ------------ | -------- | ----------------------------- |
| `/todos`     | `GET`    | Get all todos                 |
| `/todos/:id` | `GET`    | Get one todo                  |
| `/todos`     | `POST`   | Post a new todo               |
| `/todos`     | `DELETE` | Remove all todos              |
| `/todos/:id` | `DELETE` | Remove one todo               |
| `/todos/:id` | `PUT`    | Update one todo with new data |
