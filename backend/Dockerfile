FROM node:16-alpine

WORKDIR /ecommerce-api

COPY package.json /ecommerce-api

RUN npm install
RUN npm install --save-dev nodemon

COPY . /ecommerce-api

EXPOSE 8000

# Running the app
# CMD "npm" "start"
CMD "npm" "run" "dev"