var express = require('express');
  bodyParser = require('body-parser');
var app = express();
var db = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var controllers = require('./controllers');
app.get('/api', controllers.api.index);

app.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: __dirname});
  console.log(__dirname);
})



app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.albums.index);
app.post('/api/albums', controllers.albums.create);







  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
