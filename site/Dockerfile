# ===========================================
# Stage 1: Dependencies
# ===========================================
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including dev for build)
RUN npm ci

# ===========================================
# Stage 2: Builder
# ===========================================
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build argument for Under Construction mode
# Set to 'false' to show the full website
# Set to 'true' to show only the Under Construction page
ARG NEXT_PUBLIC_UNDER_CONSTRUCTION=false
ENV NEXT_PUBLIC_UNDER_CONSTRUCTION=$NEXT_PUBLIC_UNDER_CONSTRUCTION

# Build the Next.js application
RUN npm run build

# ===========================================
# Stage 3: Runner (Production)
# ===========================================
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct ownership
USER nextjs

# Expose port (Cloud Run uses PORT env variable)
EXPOSE 3000

# Set the PORT environment variable for Cloud Run
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]
