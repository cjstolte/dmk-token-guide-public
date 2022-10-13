FROM node:16-alpine as buildreact
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./client/package.json ./
# COPY ./client/package-lock.json ./
RUN npm install --legacy-peer-deps
RUN npm install react-scripts@5.0.0 -g --silent
COPY ./client ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=buildreact /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]