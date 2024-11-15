# ===============================================
FROM registry.access.redhat.com/ubi9/nodejs-20 AS appbase
# ===============================================

# Set environment
ARG PORT=3000
ENV PORT $PORT

WORKDIR /app

# Install yarn
USER root
RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    yum -y install yarn

# Yarn version
ENV YARN_VERSION 4.0.0
RUN yarn policies set-version ${YARN_VERSION}


# Set npm log verbosity level
ENV NPM_CONFIG_LOGLEVEL warn

# Global npm dependencies in a non-root user directory
ENV NPM_CONFIG_PREFIX=/app/.npm-global
ENV PATH=$PATH:/app/.npm-global/bin

# Set NODE_ENV to development in the development container
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Copy package.json and yarn.lock files
COPY --chown=default:root package*.json *yarn* ./

# Make scripts in dependencies available through path
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies including storybook addons
RUN yarn && yarn cache clean

# =============================
FROM appbase AS development
# =============================

# Copy all files
COPY --chown=default:root . .

# Start command for development
CMD ["yarn", "dev:no-open"]

# =============================
FROM appbase AS staticbuilder
# =============================

# Set NODE_ENV to production for build
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy all files, including .mdx stories
COPY --chown=default:root . .

# Build Storybook
RUN yarn build-storybook --loglevel error

# =============================
FROM appbase AS production
# =============================

# Set NODE_ENV to production in the production container
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy build folder
COPY --from=staticbuilder --chown=default:root /app/storybook-static/ /app/storybook-static/

# Copy server folder
COPY --from=staticbuilder --chown=default:root /app/storybook-server/ /app/storybook-server/

# Start server
CMD ["node", "./storybook-server/index.js"]