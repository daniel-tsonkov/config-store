const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const apiRouter = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("asdasda!");
});
db.authenticate()
  .then(() => {
    console.log("Conenected to PostgreSQL.");
    return db.sync();
  })
  .then(() => {
    console.log("Database synchronised, starting server.");

    app.listen(port, () => {
      console.log(`server runing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Unabled to connect to DB");
    console.error(err);
  });
