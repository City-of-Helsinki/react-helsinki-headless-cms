# ===============================================
FROM helsinki.azurecr.io/ubi9/nodejs-24-pnpm-builder-base AS appbase
# ===============================================

# Set environment
ARG PORT=3000
ENV PORT=$PORT

WORKDIR /app

# Set npm log verbosity level
ENV NPM_CONFIG_LOGLEVEL=warn

# Global npm dependencies in a non-root user directory
ENV NPM_CONFIG_PREFIX=/app/.npm-global
ENV PATH=$PATH:/app/.npm-global/bin

# Set NODE_ENV to development in the development container
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# Copy package.json and pnpm-lock.yaml files
COPY --chown=default:root package*.json pnpm-lock.yaml ./

# Make scripts in dependencies available through path
ENV PATH=/app/node_modules/.bin:$PATH

# Install dependencies including storybook addons
RUN pnpm install --frozen-lockfile --ignore-scripts && pnpm store prune

# =============================
FROM appbase AS development
# =============================

# Copy all files
COPY --chown=default:root . .

# Start command for development
CMD ["pnpm", "run", "dev:no-open"]

# =============================
FROM appbase AS staticbuilder
# =============================

# Set NODE_ENV to production for build
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Copy all files, including .mdx stories
COPY --chown=default:root . .

# Build Storybook
RUN pnpm run build-storybook --loglevel error

# =============================
FROM appbase AS production
# =============================

# Set NODE_ENV to production in the production container
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Copy build folder
COPY --from=staticbuilder --chown=default:root /app/storybook-static/ /app/storybook-static/

# Copy server folder
COPY --from=staticbuilder --chown=default:root /app/storybook-server/ /app/storybook-server/

# Start server
CMD ["node", "./storybook-server/index.js"]