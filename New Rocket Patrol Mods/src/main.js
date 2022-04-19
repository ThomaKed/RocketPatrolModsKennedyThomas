let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderpadding = borderUISize / 3;

//Bandit Buster by Kennedy Thomas 04/18/2022. The game took me 'X' hours to complete.
//Point Break down - 105 Max points
//Allow the player to control the Rocket after it's fired (5)
//Display the time remaining (in seconds) on the screen (10)
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//Add your own (copyright-free) background music to the Play scene (5)