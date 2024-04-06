# Use official Node.js image as the base image
FROM node:20.11-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 4200

# Set environment variables for configuration
ENV NODE_ENV=production
ENV PORT=4200

# Add labels for better maintainability
LABEL maintainer="Adam Burucs"
LABEL description="Dockerfile for Beer Finder"

# Command to start the application
CMD ["npm", "start"]

#
# Build and run
# docker buildx build -t beer-finder:v01 .
# docker run -p 4200:4200 beer-finder:v01