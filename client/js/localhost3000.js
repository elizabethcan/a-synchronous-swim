var Localhost3000 = {

  server: `http://127.0.0.1:3000`,

  getMessages: function() {
    $.ajax({
      url: Localhost3000.server,
      type: 'GET',
      success: function(result) {
        SwimTeam.move(result);
        console.log('success');
      },
      error: function(error) {
        console.log('error: ' + error);
      }
    });
  }
  
};
    