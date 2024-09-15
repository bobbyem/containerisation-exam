FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Starta Vite på port 5173
EXPOSE 5173

CMD ["npm", "run", "dev"]
