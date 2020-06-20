
export default class Ball {
    constructor() {
        this.self = undefined;
    }

    preload(_scene) {
        _scene.load.image("ball", "https://labs.phaser.io/assets/sprites/shinyball.png");
    }

    create(_scene) {
        var touch_start_x = 0;
        var line_angle = 0;
        this.self = _scene.physics.add.image(200, 400, 'ball');
        this.self.setDisplaySize(30, 30)
        this.self.setOrigin(0.5)
        this.self.setCircle(15)
        _scene.input.on("pointerdown", (pointer) => {
            touch_start_x = pointer.x
        })
        _scene.input.on('pointermove', function (pointer) {         
            if (pointer.isDown) {
                // 전체 가로 길이(180도) 분에 이동한 x좌표(돌아 갈 angle 정도) 길이를 180에 곱해서 비율로 각도
                line_angle = 180 * (pointer.x - touch_start_x) / _scene.sys.config.width;

            }
        });
        
    }
}