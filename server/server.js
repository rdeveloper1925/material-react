const express = require("express");
const { getClientIp, dbConnection } = require("./helpers");
const fileUpload = require("express-fileupload");
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
//for file uploads
app.use(fileUpload({ debug: true, preserveExtension: true }));

//custom middleware. will later check jwt
const custMiddleware = (request, response, next) => {
  if (false) {
    console.log("failed", getClientIp(request));
    response.status(403).send("Unauthorized access");
  } else {
    //console.log(getClientIp(request));
    next();
  }
};

app.get("/api", custMiddleware, (request, response) => {
  var con = dbConnection();
  response.send(JSON.stringify({ message: "moneey" }));
});

app.get("/api/products", custMiddleware, (request, response) => {
  var con = dbConnection();
  con.query("select * from products", (error, rows) => {
    response.send(JSON.stringify(rows));
  });
});

app.post("/api/upload", custMiddleware, (request, response) => {
  if (request.files === null) {
    return response.status(400).json({ message: "No file was uploaded" });
  }
  const file = request.files.file;
  var time = new Date().getTime();
  file.mv(`${__dirname}/../public/uploads/${time}_${file.name}`, (err) => {
    if (err) {
      return response.status(500).json({ message: "seems to exist" });
    } else {
      return response.json({
        fileName: file.name,
        filePath: `/uploads/${time}_${file.name}`,
      });
    }
  });
});

app.all("*", (request, response) => {
  //console.log("redirected", request, response);
  response.redirect("http://localhost:3000/");
});

app.listen(port, () => {
  console.log("server listening on port 3001");
});
