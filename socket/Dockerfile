FROM node:16-alpine

WORKDIR /usr/src/ecommerce-socket

COPY package.json package-lock.json*  ./

RUN npm install

COPY . /usr/src/ecommerce-socket

EXPOSE 4000

# Running the app
CMD "npm" "start"