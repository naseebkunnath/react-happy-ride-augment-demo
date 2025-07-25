# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Set environment variable for custom port
ENV PORT=3000

# Expose the desired port
EXPOSE 3000

# Start the app
CMD ["npm", "run" , "dev"]

# docker build -t react-happy-ride-augment-demo .
# docker run --name react-happy-ride-augment-demo-app -p 3000:3000 react-happy-ride-augment-demo
