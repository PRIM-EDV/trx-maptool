FROM node:18.1.0 AS webapp
RUN apt update && apt install protobuf-compiler -y 

WORKDIR /opt/rld/webapp

# Install webapp source dependancies
COPY ./webapp/*.json ./
RUN npm install

# Build webapp
COPY ./webapp/src ./src
COPY ./protocol ../protocol

RUN npm run proto:generate
RUN npm run build

FROM node:18.1.0 AS server
RUN apt update && apt install protobuf-compiler -y 

WORKDIR /opt/rld/server

# Install server source dependancies
COPY ./server/*.json ./
RUN npm install

# Build server
COPY ./server/src ./src
COPY ./protocol ../protocol

RUN npm run proto:generate
RUN npm run build

# Get webapp artifact
COPY --from=webapp /opt/rld/webapp/dist/rld-maptool/ ./dist/public

#
EXPOSE 3100
EXPOSE 3200

# Run startscript
COPY ./run.sh ./
RUN chmod +x run.sh

CMD ["./run.sh"]