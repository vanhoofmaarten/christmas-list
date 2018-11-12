const { Nuxt, Builder } = require("nuxt");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

let config = require("../nuxt.config");
config.dev = !(process.env.NODE_ENV === "production");

const nuxt = new Nuxt(config);

if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

app.listen(port, host);
console.log("Server is listening on " + host + ":" + port);
