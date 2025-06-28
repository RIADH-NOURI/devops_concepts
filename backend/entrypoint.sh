#!/bin/sh
set -e

echo "⏳ Waiting for MySQL on mysql:3306..."

until nc -z mysql 3306; do
  echo "MySQL not ready yet... waiting"
  sleep 2
done

echo "✅ MySQL is up"

# Run Prisma commands safely now
npx prisma generate
npx prisma migrate deploy

# Start your app
npm start
