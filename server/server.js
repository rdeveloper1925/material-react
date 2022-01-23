const express = require("express");
const { getClientIp, dbConnection } = require("./helpers");
const port = 3001;
const app = express();

app.disable("X-Powered-By");
//global middleware
app.use((request, response, next) => {
  //console.log("global middleare");
  response.removeHeader("X-Powered-By");
  response.type("application/json");
  next();
});

//custom middleware. will later check jwt
const custMiddleware = (request, response, next) => {
  if (false) {
    console.log("failed", getClientIp(request));
    response.status(403).send("Unauthorized access");
  } else {
    console.log(getClientIp(request));
    next();
  }
};

app.get("/api", custMiddleware, (request, response) => {
  var con = dbConnection();
  response.send(JSON.stringify({ message: "moneey" }));
});

app.all("*", (request, response) => {
  //console.log("redirected", request, response);
  response.redirect("http://localhost:3000/");
});

app.listen(port, () => {
  console.log("server listening on port 3001");
});
