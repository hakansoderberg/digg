FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM node:18

WORKDIR /app

COPY --from=build /app /app

RUN npm install --only=production

EXPOSE 3001

CMD ["node", "dist/index.js"]