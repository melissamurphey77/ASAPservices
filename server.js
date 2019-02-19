const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
// app.use(favicon("my-app" + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static("my-app"));
app.use(express.static(path.join("my-app", 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join("my-app", 'build', 'index.html'));
});
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});