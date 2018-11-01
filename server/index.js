require('dotenv').config();
const PORT = process.env.PORT || 8080;

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require('./handlers/errorHandler');

const bandRouter = require('./routers/bandRouter');
const musicianRouter = require('./routers/musicianRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('combined'));
app.use("/api/bands", bandRouter);
app.use("/api/musicians", musicianRouter);
app.get("/", (req, res) => {
  res.send("HELLO");
})


app.use((req, res, next) => {
  let err = new Error("Not Found");
  next(err);
})

app.use(errorHandler);

app.listen(PORT, function() {
  console.log("Server is running in PORT : " + PORT );
})