
// import Home from './js/scenes/Home.js';
import Playing from './js/scenes/Playing.js';
// import Over from('./scenes/Over.js');
// import Setting from('./scenes/Setting.js');

var gameSize = {
    w: 450,
    h: 800
};

var config = {
    type: Phaser.WEBGL,
    width: gameSize.w,
    height: gameSize.h,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // scene: [ Home, Playing, Over, Setting ]
    scene: Playing
};

var game = new Phaser.Game(config);
