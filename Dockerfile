FROM node:18

# Working Dir
WORKDIR /usr/src/app

# Copy Package JSON file
COPY package*.json ./

# Installing globals like PRETTIER
# RUN npm install prettier -g

# Install Files
RUN npm install

# Copy Source files
COPY . . 

# Build
RUN npm run prod

# Expose
EXPOSE 5050

CMD [ "node", "src/app.js" ]

