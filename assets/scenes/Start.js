export default class Start extends Phaser.Scene{
    constructor(){
        super("Start");
    }

    create(){
        this.add.image(400,300, 'start')
        .setInteractive().on('pointerdown', ()=> this.scene.start("Game"));
    }
}