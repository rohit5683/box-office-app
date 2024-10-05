FROM node:20

WORKDIR /box-office

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

