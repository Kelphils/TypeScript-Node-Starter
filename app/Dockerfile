FROM node:14.21.3  

WORKDIR /app

LABEL "version"="1.0"
LABEL "description"="Typescript node starter"
LABEL "maintainer"="obiohakelvin96@gmail.com"

COPY . /app/

RUN cat .env.example > .env
RUN rm -rf .env.example


RUN npm install
RUN npm rebuild node-sass
RUN npm run build

HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=4 CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 8080/tcp

CMD [ "npm", "run", "start" ]