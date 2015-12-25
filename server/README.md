Dr Websight Server
===================

A server application to ping given URL and return the status in JSON format.

Requirements
-------------

- Node.js. Tested with 4.x series.

Installation
-------------

- install node.js
- npm -v
- if your npm is still 2.x: npm -g update npm
- npm install
- copy default.json.example to default.json
- docker run --name dr-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

Running
--------

- npm run start

Server now accepts traffic to http://localhost:1235
