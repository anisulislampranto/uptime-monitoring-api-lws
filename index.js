// tittle: uptime monitoring application
// description: A Restful api to monitor up or down time of user defined linkes
// date: 31may2022
// by lws raw node playlist

// dependencies
const http = require("http");
const url = require("url");

// app object - module scaffholding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.hanldeReqReq);
  server.listen(app.config.port, () => {
    console.log(`listending to port ${app.config.port}`);
  });
};

// handle request and response
app.hanldeReqReq = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, " ");
  console.log(trimmedPath);
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;

  const headerObject = req.headers;

  console.log(headerObject);

  //response hanlde
  res.end("hello bangla");
};

// start the server
app.createServer();
