# (*To dockerization this app*)
#<---------------------------->
# base image
FROM node:14   

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
#<------------------------>
# Copy all folders in this project to docker fiels
COPY . .

# define network port
EXPOSE 3000
# to execute docker file
CMD [ "node", "index.js" ]