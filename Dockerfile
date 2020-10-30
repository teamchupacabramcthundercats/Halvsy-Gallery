FROM node:erbium
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run build
EXPOSE 7777
CMD ["npm", "run", "server"]