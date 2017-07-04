var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use('/*', function(req, res){
  res.sendfile(__dirname + '/build/index.html');
});

app.listen(process.env.PORT);
