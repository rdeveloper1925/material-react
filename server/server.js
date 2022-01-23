const express = require("express");
const port = 3001;
const app = express();

app.get("/api", (request, response) => {
  response.json({ message: "Hello from server" });
});

app.all("*", (request, response) => {
  console.log("redirected", request, response);
  response.redirect("http://localhost:3000/");
});

app.listen(port, () => {
  console.log("server listening on port 3001");
});
