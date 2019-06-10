FROM node:11.14.0

ENV PORT=3000

LABEL Michael Nease

WORKDIR /var/www/

COPY client client
COPY server server

RUN cd ./client && npm install && npm run build
RUN cd ./server && npm install

EXPOSE $PORT

# ENV NODE_ENV=production

# COPY . /var/www
# WORKDIR /var/www/server

# # VOLUME ["/var/www"]

# RUN npm install

ENTRYPOINT ["npm", "start"]