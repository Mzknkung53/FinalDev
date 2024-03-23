FROM node:latest as node
 
WORKDIR /app
 
COPY package*.json /app/
 
RUN npm ci
 
COPY ./ /app/

EXPOSE 3500
 
CMD ["node", "app.js"] 