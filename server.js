var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
//ROUTES GO HERE:
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html')
});

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
});
