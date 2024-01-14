FROM node:18-alpine AS base

# Prune the workspace
FROM base AS pruner
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune api --docker

# Build the api
FROM base AS builder
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=pruner /app/out/full/ .
RUN yarn turbo run build --filter=api

# Remove devDependencies from package.json or "yarn install --production"
# will fail because it doesn't find monorepo packages on yarn (Yarn bug)
FROM base AS fixer
WORKDIR /app
RUN apk add --no-cache jq
COPY --from=builder ./app/apps/api/package.json ./package.json
RUN jq 'del(.devDependencies)' package.json > package.json.tmp && mv package.json.tmp package.json

# Install only required packages and run api
FROM base AS runner
WORKDIR /app
COPY --from=builder ./app/apps/api/build ./build
COPY --from=builder ./app/yarn.lock ./yarn.lock
COPY --from=fixer ./app/package.json ./package.json
RUN yarn install --production --frozen-lockfile
EXPOSE 8080
CMD ["yarn", "start"]