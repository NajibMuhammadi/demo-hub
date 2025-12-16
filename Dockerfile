# Använd Node.js
FROM node:20-alpine
WORKDIR /app

# Kopiera package.json och installera dependencies
COPY package*.json ./
RUN npm install

# Kopiera resten av appen
COPY . .

# Bygg appen
RUN npm run build

# Exponera porten
EXPOSE 3000

# Starta Next.js i produktion
CMD ["npm", "start"]
