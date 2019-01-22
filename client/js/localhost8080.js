var Localhost8080 = {

  server: `http://127.0.0.1:8080`,

  getMessages: function() {
    $.ajax({
      url: Localhost8080.server,
      type: 'GET',
      contentType: 'application/json',
      success: function(result) {
        console.log('success');
      },
      error: function(error) {
        console.log('error');
      }
    });
  }
  
};
  