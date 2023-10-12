# Stage 1: Build the Angular app
FROM node:14 as angular

WORKDIR /app

# Copy your Angular application source code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the Angular app
RUN npm run build

# Stage 2: Use a smaller base image for the production image
FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

# Copy the built Angular app from the 'angular' stage to the production image
COPY --from=angular /app/dist/demo .

# Optionally, you can expose a port if your application requires it
# EXPOSE 80

# Start the Apache HTTPD server
CMD ["httpd-foreground"]
