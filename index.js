var express = require('express')
var app = express();

fs = require("fs");

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

html_string = fs.readFileSync('index.html');
app.get('/', function(request, response) {
  response.send(html_string.toString('utf-8'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
