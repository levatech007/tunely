var express = require('express');
  bodyParser = require('body-parser');
var app = express();
    db = require('./models');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var controllers = require('./controllers');
app.get('/api', controllers.api.index);

app.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: __dirname});
  console.log(__dirname);
})

app.get('/api/albums', controllers.api.index)

app.post('/api/albums', controllers.api.create)







  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
