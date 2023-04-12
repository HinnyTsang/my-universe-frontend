# Docker File for the Nextjs frontend application
FROM node:19-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD [ "npm", "run", "dev" ]
