# Stage 1 - Build
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Nuxt for production
RUN npm run build

# Stage 2 - Run
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only what is needed for runtime
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Nuxt will listen on 2002
ENV NUXT_PORT=2002
EXPOSE 2002

# Start Nuxt
CMD ["node", ".output/server/index.mjs"]
