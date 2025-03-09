FROM node:18.8.0-alpine AS builder

ARG CI_COMMIT_BRANCH
ARG CI_COMMIT_SHORT_SHA
ARG CI_COMMIT_TAG
ARG VAR_FILE

# set working directory
WORKDIR /app
COPY package.json ./

RUN yarn global add env-cmd jest mocha cross-env

COPY . ./
RUN yarn install
RUN env-cmd -f ./env/.common env-cmd -f ./env/.$VAR_FILE node scripts/build.js
RUN echo $CI_COMMIT_BRANCH > build/version.txt
RUN echo $CI_COMMIT_SHORT_SHA >> build/version.txt
RUN echo $VAR_FILE >> build/version.txt
RUN echo $CI_COMMIT_TAG >> build/version.txt

FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html/web-frontend

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
