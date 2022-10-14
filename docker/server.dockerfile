FROM node:16-alpine as buildserver
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./server/package.json ./
COPY ./server ./
RUN npm install --legacy-peer-deps

CMD [ "node", "index.js"]
#CMD [ "npm", "run", "start"]
#CMD [ "node", "./bin/www"]
#CMD tail -f