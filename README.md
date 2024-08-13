# Express Server JWT

A simple server with JWT authentication with the ability signin and register

## Requirements

- Node.js
- NPM
- MongoDB locally

## Endpoints:

- /api/register - POST (email, password)
- /api/login - POST (email, password)

## Get Started:

Install all dependencies:

```
npm install
```

Configure the server:

```
touch .env

# configuration should look like this:
SECRET:"secret word for JWT"
PORT:3000
DB:"mongodb://localhost:27017/tasks"
```

In case you dont have MongoDB installed locally, you can use docker image.

Pull image and run it for the first time:

```
docker run -it -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
```

Stop container:

```
docker stop mongodb
```

Start container:

```
docker start mongodb
```

Configure MongoDB server:

- Create new database
- Create collection called "users"

Run App backend:

```
npm start
```

## Useful things

If you are not familiar with MongoDB, I suggest to install "MongoDB Compass" to easily manage Mongo Database via GUI.
