export default class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    overSound;

    create() {
        this.overSound = this.sound.add('overSound');
        this.overSound.play();
        this.add.image(400, 300, "over")
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Game'));
    }
}
