FROM node:14.19-alpine3.15

WORKDIR /usr/app

RUN npm install

CMD [-d "node_modules" ] && npm start || npm ci && npm start