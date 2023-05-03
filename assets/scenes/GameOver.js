export default class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOver");
    }

    create(){
        this.add.image(400,390, "win")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('Game')); ;
    }
}
