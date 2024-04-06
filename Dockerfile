FROM node:20.11-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@17.0.0
RUN npm install
COPY . .
LABEL maintainer="Adam Burucs"
LABEL description="Beer Finder"

# This is needed for proper running of Angular
# https://stackoverflow.com/questions/46778868/ng-serve-not-working-in-docker-container
CMD ["ng","serve","--host", "0.0.0.0"]

#
# Build and run
# docker buildx build -t beer-finder:v01 .
# docker run -p 4200:4200 beer-finder:v01