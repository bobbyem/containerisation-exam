FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Starta Vite på port 5173
EXPOSE 80

CMD ["npm", "run", "dev"]
