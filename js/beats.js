(function(){
  console.log("this iife tho");
  SC.initialize({
    client_id: '1ccc81f4a0cc76fd11de2a4ee45be460',
    redirect_uri: 'http://thomasphillips3.github.io/timeplaylist/callback.html'
  });

  // initiate auth popup
  SC.connect().then(function() {
    return SC.get('/me');
  }).then(function(me) {
    alert('Hello, ' + me.username);
  });
}())
