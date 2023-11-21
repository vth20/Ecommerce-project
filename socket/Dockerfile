FROM node:16-alpine

WORKDIR /ecommerce-socket

COPY package.json package-lock.json*  ./

RUN npm install

COPY . /ecommerce-socket

EXPOSE 4000

# Running the app
CMD "npm" "start"