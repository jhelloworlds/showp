FROM quay.io/aptible/nodejs:v6.2.x
ADD package.json /app/
WORKDIR /app
RUN npm install --production
ADD . /app
ENV PORT 3000
EXPOSE 3000
