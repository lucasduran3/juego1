export default class Start extends Phaser.Scene {
    audio;
    constructor() {
        super("Start");
    }
    init() {
        this.audio = this.sound.add('musicInicio', { loop: true });

    }
    create() {
        this.audio.play();
        this.audio.setVolume(0.3);
        this.add.image(400, 300, 'start').setInteractive().on('pointerdown', () => (this.scene.start("Game"), this.audio.stop()));


    }
}