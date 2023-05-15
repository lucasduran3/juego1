export default class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOver");
    }

    create(){
        this.add.image(400,300, "over")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('Game')); 
    }
}
