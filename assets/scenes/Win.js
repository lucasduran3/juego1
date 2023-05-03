
export default class Win extends Phaser.Scene{
    constructor(){
        super("Win");
    }

    create(){
        this.add.image(400,390, "win");
    }
}
