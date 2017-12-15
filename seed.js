var db = require("./models");

var albumsList = [{
  artistName: 'Nine Inch Nails',
  name: 'The Downward Spiral',
  releaseDate: '1994, March 8',
  genres: [ 'industrial', 'industrial metal' ],
}, {
  artistName: 'Metallica',
  name: 'Metallica',
  releaseDate: '1991, August 12',
  genres: [ 'heavy metal' ],
}, {
  artistName: 'The Prodigy',
  name: 'Music for the Jilted Generation',
  releaseDate: '1994, July 4',
  genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ],
}, {
  artistName: 'Johnny Cash',
  name: 'Unchained',
  releaseDate: '1996, November 5',
  genres: [ 'country', 'rock' ],
}];

var songsList = [{
  name: 'Swamped',
  trackNumber: 1
}, {
  name: "Heaven's a Lie",
  trackNumber: 2
}, {
  name: 'Daylight Dancer',
  trackNumber: 3
}, {
  name: 'Humane',
  trackNumber: 4
}, {
  name: 'Self Deception',
  trackNumber: 5
}, {
  name: 'Aeon',
  trackNumber: 6
}, {
  name: 'Tight Rope',
  trackNumber: 7
}];


db.Song.remove({}, function(err, songs) {
  console.log('removed all songs');
  db.Song.create(songsList, function(err, songs){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all songs');
    console.log("created", songs.length, "songs");


    db.Album.remove({}, function(err, albums){
      console.log('removed all albums');
      albumsList.forEach(function (albumData) {
        var album = new db.Album({
          artistName: albumData.artistName,
          name: albumData.name,
          releaseDate: albumData.releaseDate,
          genres: albumData.genres,
          songs: []
        });

        //console.log(album);

        db.Song.find({}, function (err, foundSongs) {
          //console.log('found song ' + foundSong.name + ' for album ' + album.name);

          album.songs.push(foundSongs);
          if (err) {
            console.log(err);
            return;
          }

          album.songs = foundSongs;
          album.save(function(err, savedAlbum){
            if (err) {
              return console.log(err);
            }
          });
        });
      });
    });
  });
});
