# # Dockerfile
#
# # Use an official Node.js runtime as a parent image
# FROM node:14
#
# # Set the working directory to /app
# WORKDIR /app
#
# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./
#
# # Install dependencies
# RUN npm install
#
# # Copy the current directory contents into the container at /app
# COPY . .
#
# # Expose port 3000
# EXPOSE 3000
#
# # Start the React app
# CMD ["npm", "start"]

# Use Node.js LTS image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/frontend-app

# Copy package.json and package-lock.json to the container
COPY . .

# Install frontend dependencies
RUN npm install

# Expose the port on which the frontend will run
EXPOSE 3000

# Command to run the frontend app
CMD ["npm", "start"]
