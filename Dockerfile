FROM node:8.9.4
RUN mkdir -p /web/app
COPY . /web/app
WORKDIR /web/app
EXPOSE 8080
CMD npm install && npm run serve
