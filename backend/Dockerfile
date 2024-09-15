FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Exponera den port som din backend använder
EXPOSE 3000

CMD ["node", "app.js"]
