const express = require('express');


const PORT = process.env.PORT || 8080;

const app = express();



app.listen(process.env.PORT, function() {
  console.log("Server is running in PORT : " + PORT );
})