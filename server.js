var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./src/server/routes');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
routes(app);

app.use(express.static(__dirname));

app.all('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
