(function(){
  console.log("this iife tho");
  SC.initialize({
    client_id: '1ccc81f4a0cc76fd11de2a4ee45be460',
    redirect_uri: '//timeplaylist/callback.html'
  });

  // initiate auth popup
  SC.connect().then(function() {
    console.log("connected");
    return SC.get('/me');
  }).then(function(me) {
    // alert('Hello, ' + me.username);
    // window.setTimeout(window.opener.SC.connectCallback, 1);
    console.log("in the 'then' function");
  });

  // var userId = 5333180;
  // SC.get("/tracks", {
  //   user_id: userId,
  //   limit: 100
  // }, function(tracks) {
  //   var tmp = '';
  //   for (var i = 0; i < tracks.length; i++) {
  //     tmp = '<a href="' + tracks[i].permalink_url + '">' + tracks[i].title + ' - ' + tracks[i].duration + '</a>';
  //     $("<li/>").html(tmp).appendTo("#track-list");
  //   }
  // });
}())
