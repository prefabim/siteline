#!/bin/bash

echo "🚀 Starting SiteLine development environment..."

# 1. Start Docker containers
echo "📦 Starting Docker (Postgres & Redis)..."
docker compose up -d

# 2. Wait for Postgres
echo "⏳ Waiting for database to be ready..."
until docker exec $(docker compose ps -q postgres) pg_isready -U postgres; do
  sleep 1
done

# 3. Create .env if not exists
if [ ! -f .env ]; then
  echo "DATABASE_URL=\"postgresql://postgres:password@localhost:5432/siteline?schema=public\"" > .env
  echo "JWT_SECRET=\"dev-secret-123\"" >> .env
  echo "PORT=3001" >> .env
  echo "✅ Created .env file"
fi

# 4. Install dependencies
echo "📥 Installing npm dependencies..."
npm install

# 5. Database Setup
echo "🏗️  Setting up database..."
npx prisma generate --schema=packages/db/prisma/schema.prisma
npx prisma migrate dev --name init --schema=packages/db/prisma/schema.prisma
npm run seed -w packages/db

# 6. Start apps in parallel
echo "⚡ Starting all services..."

# Używamy concurrently jeśli zainstalowane, inaczej odpalamy w tle
if npx concurrently --version > /dev/null 2>&1; then
  npx concurrently \
    --names "API,WEB,EXPO" \
    --prefix-colors "blue,green,magenta" \
    "npm run dev -w packages/api" \
    "npm run dev -w apps/web" \
    "npm run start -w apps/mobile"
else
  npm run dev -w packages/api &
  npm run dev -w apps/web &
  npm run start -w apps/mobile &
fi

echo ""
echo "--------------------------------------------------"
echo "✅ SiteLine is UP and RUNNING!"
echo "--------------------------------------------------"
echo "🌐 Web Admin: http://localhost:3000"
echo "🔌 API Server: http://localhost:3001"
echo "📱 Expo Go: Scan the QR code in your terminal"
echo ""
echo "👤 Test User Phone: +48123456789"
echo "🔑 OTP Code: 000000"
echo "--------------------------------------------------"
echo ""

# Keep script running to see logs
wait
