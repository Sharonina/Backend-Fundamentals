const http = require("node:http");

const server = http.createServer(function (request, response) {
  response.write("Hello from node");
  response.end();
});

server.listen(9080, function () {
  console.log("Servidor escuchando en puerto 9080");
});
