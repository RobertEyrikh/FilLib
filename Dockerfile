FROM node:18.13.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "serve"]

FROM nginx:mainline
COPY --from=build /app/dist var/www
COPY nginx.conf etc/nginx/nginx.conf

EXPOSE 8000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
