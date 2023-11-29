FROM node:16-alpine

WORKDIR /usr/src/ecommerce-api

COPY package.json /usr/src/ecommerce-api

RUN npm install
RUN npm install --save-dev nodemon

# had been mounted for debug
# COPY . /usr/src/ecommerce-api

EXPOSE 8000

# Running the app
# CMD "npm" "start"
CMD "npm" "run" "dev"