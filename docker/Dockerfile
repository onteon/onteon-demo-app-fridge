FROM node:14.17.1-slim
WORKDIR /app
COPY fridge.js fridge.js
COPY package.json package.json
RUN npm install
ENTRYPOINT ["node","fridge.js"]