var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, allAlbums) {
   res.json(allAlbums);
 });
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  var genres = req.body.genres.split(', ');

  var newAlbum = new db.Album({
    name: req.body.name,
    artistName: req.body.artistName,
    releaseDate: req.body.releaseDate,
    genres: req.body.genres
  });
  console.log(newAlbum);

  newAlbum.save(function(err, newAlbum){
    if(err) {return console.log(err);}
    console.log("saved new album: ", newAlbum);
  });
      res.json(newAlbum);
};


// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
