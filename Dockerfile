FROM node:20 as build-step

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:latest
COPY --from=build-step /app/dist/front/browser /usr/share/nginx/html

EXPOSE 80



