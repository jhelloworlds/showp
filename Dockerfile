FROM quay.io/aptible/nodejs:v6.2.x
ADD package.json /app/
WORKDIR /app
RUN sudo npm install serve -g
ADD . /app
ENV PORT 3000
EXPOSE 3000
