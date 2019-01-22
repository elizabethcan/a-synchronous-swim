$('button').click((event) => {
    console.log('button clicked');
    // var directions = ['Up', 'Down', 'Left', 'Right'];
    // var randomDirection = directions[Math.floor(Math.random() * directions.length)];
    // SwimTeam.move(randomDirection.toLowerCase());
    // Localhost8080.getMessages();
    Localhost3000.getMessages();
  });