const express = require("express");
// const numCPUs = require("node:os").availableParallelism(); (new approach)
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
console.log(`worker has been started...  ${process.pid}`);
app.listen(3000);
