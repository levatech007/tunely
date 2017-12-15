/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


$(document).ready(function() {
  console.log('app.js loaded!');

//ajax methods

$.ajax({
  method:"GET",
  url: "/api/albums",
  success: handleSuccess,
  error: handleError
});


$('form').on('submit', function(e) {
  e.preventDefault();
  //console.log($("form").serialize());
  $.ajax({
    method: "POST",
    url: "/api/albums",
    data: $("form").serialize(),
    success: function(data) {
      renderAlbum(data);
    },
    error: handleError
  });
  $('input').val('');
});

function handleSuccess(albums) {
  albums.forEach (function (album){
    renderAlbum(album);
});
};


function handleError(error) {
  console.log("there has been an error", error);
}


// this function takes a single album and renders it to the page
function renderAlbum(album) {

  var albumDisplay = `
  
  <div class= "row album">
          <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
              <div class="panel-body">

              <div class='row'><div class="col-md-3 col-xs-12 thumbnail album-art">
                <img src="/images/800x800.png" alt="album image">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Album Name:</h4>
                    <span class='album-name'>${album.name}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Artist Name:</h4>
                    <span class='artist-name'>${album.artistName}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Released date:</h4>
                    <span class='album-releaseDate'>${album.releaseDate}</span>
                  </li>
                </ul>
              </div>

            </div>
            <div class='panel-footer'>
            </div>
          </div>
        </div>
      </div>
    </div>`


  $('#albums').append(albumDisplay);
};




});
