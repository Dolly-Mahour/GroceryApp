FROM node:18

WORKDIR /MyGroceryApp

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm","start" ]