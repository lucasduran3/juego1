export default class Win extends Phaser.Scene {
    constructor() {
        super("Win");
    }
    winSound;
    create() {
        this.winSound = this.sound.add('winSound');
        this.winSound.play();
        this.winSound.setVolume(0.5);
        this.add.image(400, 390, "win")
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Game'));

    }
}
