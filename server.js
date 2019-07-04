const express = require('express');
const app = express();
var compression = require('compression');
app.use(compression());

var port = (typeof(process.env.PORT) != 'undefined') ? process.env.PORT : 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/web/index.html');
});

app.get(/\/.+/, function(req, res) {
  res.sendFile(__dirname + '/web/' + req.path.substring(1));
});

const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
