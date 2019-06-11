FROM node:11.14.0

ENV PORT=3000

LABEL Michael Nease

WORKDIR /var/www/

COPY client client
COPY server server

RUN cd ./client && npm install && npm run build
RUN cd ./server && npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]