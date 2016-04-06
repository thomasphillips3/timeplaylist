(function(){
  console.log("this iife tho");
  SC.initialize({
    client_id: '1ccc81f4a0cc76fd11de2a4ee45be460',
    redirect_uri: 'https://thomasphillips3.github.io/timeplaylist/callback.html'
  });

  // initiate auth popup
  SC.connect().then(function() {
    return SC.get('/me');
  }).then(function(me) {
    var userId = 5333180;
    tracks = SC.get("/playlists", {user_id: 5333180})._result;
    console.log(tracks);
  });
}())
