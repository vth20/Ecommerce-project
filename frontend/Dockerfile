FROM node:16-alpine

WORKDIR /usr/src/ecommerce-ui

COPY package.json package-lock.json*  ./

RUN npm install -f

# had been mounted for debug
# COPY . /usr/src/ecommerce-ui

EXPOSE 3000

# Running the app
CMD "npm" "start"