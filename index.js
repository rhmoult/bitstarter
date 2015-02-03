var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

html_string = fs.readFileSync('./index.html', 'utf-8')
app.get('/', function(request, response) {
  response.send(html_string)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
