FROM node:16-alpine

WORKDIR /ecommerce-ui

ENV MONGO_DB_USERNAME=admin \
	MONGO_DB_PWD=password

COPY package.json package-lock.json*  ./

RUN npm install -f

COPY . /ecommerce-ui

EXPOSE 3000

# Running the app
CMD "npm" "start"