FROM node:11.14.0

ENV PORT=3000

MAINTAINER Michael Nease

WORKDIR /var/www/

COPY client client
COPY server server

RUN cd ./client && npm install && npm run build
RUN cd ./server && npm install && npm start

EXPOSE $PORT

# ENV NODE_ENV=production

# COPY . /var/www
# WORKDIR /var/www/server

# # VOLUME ["/var/www"]

# RUN npm install

# ENTRYPOINT ["npm", "start"]