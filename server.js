const express = require("express");
const cluster = require("node:cluster");
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send(`performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`ding ding ding ... ${process.pid}`);
});

console.log("running server.js");

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  cluster.fork();

  
  cluster.fork();
} else {
  console.log(`worker has been started...  ${process.pid}`);
  app.listen(3000);
}
