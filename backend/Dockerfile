FROM node:22-slim

RUN apt-get update && apt-get install -y openssl 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .    
# Generate Prisma client, apply migrations, then start the app
RUN npx prisma generate

CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]
