FROM node:18-alpine3.14

RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY . .

EXPOSE 3001

CMD [ "yarn" , "dev"]