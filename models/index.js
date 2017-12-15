var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tunely');

var Album = require('./albums');

module.exports = {
  Album: Album
};
