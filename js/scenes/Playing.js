import Ball from '../entity/ball.js';

export default class Playing extends Phaser.Scene {
    constructor () {
        super('playing');
        
        // player ball
        this.ball = new Ball();
    }

    preload() {
        this.ball.preload(this);

    }

    create() {
        this.ball.create(this);
        
    }

    update() {


        
    }
}
