import {SHAPES} from '../../util.js';
const {TRIANGLE, SQUARE, DIAMOND, RED_DIAMOND} = SHAPES;

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload() {
        this.load.image("sky", "./assets/image/sky.png");
        this.load.image("ground", "./assets/image/platform.png");
        this.load.image("ninja", "./assets/image/ninja.png");
        this.load.image("keyR", "./assets/image/keyR.png");
        this.load.image(SQUARE, "./assets/image/square.png");
        this.load.image(TRIANGLE, "./assets/image/triangle.png");
        this.load.image(DIAMOND, "./assets/image/diamond.png");
        this.load.image(RED_DIAMOND, "./assets/image/redDiamond.png");
        this.load.image("win", "./assets/image/win.png");
        this.load.image("over", "./assets/image/gameOver.png");
        this.load.image("start", "./assets/image/start.png");
      }
    create(){
        this.scene.start("Start");
    }
}
