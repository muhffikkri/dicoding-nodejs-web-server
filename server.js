const http = require("http");

const requestListener = (request, response) => {
  let body = [];

  request.on("data", (chunk) => {
    body.push(chunk);
  });

  request.on("end", () => {
    body = Buffer.concat(body).toString();
  });
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});