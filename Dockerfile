FROM node:10.9.0-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY . .
RUN yarn install

EXPOSE 8080 
ENV PORT 8080 

RUN yarn build 

CMD [ "yarn", "start" ]