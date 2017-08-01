const express = require('express');

var logger = require("morgan");


// initializes express
const app = express();

// sets port
var PORT = process.env.PORT || 3000;

// logs every request to the console
app.use(logger("dev"));

// tell the app to look for static files in these directories
app.use(express.static(process.cwd() + "/public"));

// listens on port 3000
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
