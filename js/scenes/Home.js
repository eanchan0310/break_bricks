
export default class Home extends Phaser.Scene {
    constructor () {
        super('home');
    }

    preload() {
        // this.load.image("ball", "https://labs.phaser.io/assets/sprites/shinyball.png");
        // this.load.image("brick", "")

    }

    create() {
        this.scene.start('playing');
        
    }

    update() {


        
    }
}
