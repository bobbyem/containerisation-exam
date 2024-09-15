FROM node:18 AS build

# 2. Ange arbetskatalogen i containern
WORKDIR /app

# 3. Kopiera package.json och installera beroenden
COPY package.json package-lock.json ./
RUN npm install

# 4. Kopiera hela projektet in i containern
COPY . .

# 8. Exponera port 80 för att kunna nå applikationen
EXPOSE 5173

CMD ["npm", "run", "dev"]
