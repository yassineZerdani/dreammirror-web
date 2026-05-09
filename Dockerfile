# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* are inlined at build time — override via --build-arg or compose build.args
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ARG NEXT_PUBLIC_APK_URL=https://github.com/yassineZerdani/dreammirror-web/releases/latest/download/dreammirror.apk
ARG NEXT_PUBLIC_APP_VERSION=1.0.0
ARG NEXT_PUBLIC_APK_SIZE=
ARG NEXT_PUBLIC_IPA_URL=
ARG NEXT_PUBLIC_IPA_VERSION=
ARG NEXT_PUBLIC_IPA_SIZE=
ARG NEXT_PUBLIC_SUPPORT_EMAIL=support@dreammirror.app

ENV NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_APK_URL=${NEXT_PUBLIC_APK_URL} \
    NEXT_PUBLIC_APP_VERSION=${NEXT_PUBLIC_APP_VERSION} \
    NEXT_PUBLIC_APK_SIZE=${NEXT_PUBLIC_APK_SIZE} \
    NEXT_PUBLIC_IPA_URL=${NEXT_PUBLIC_IPA_URL} \
    NEXT_PUBLIC_IPA_VERSION=${NEXT_PUBLIC_IPA_VERSION} \
    NEXT_PUBLIC_IPA_SIZE=${NEXT_PUBLIC_IPA_SIZE} \
    NEXT_PUBLIC_SUPPORT_EMAIL=${NEXT_PUBLIC_SUPPORT_EMAIL}

RUN npm run build

FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
