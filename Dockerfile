# — Build stage —
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY next.config.mjs ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY tailwind.config.js ./
COPY public ./public
COPY app ./app

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# — Runtime stage —
FROM nginx:stable-alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
