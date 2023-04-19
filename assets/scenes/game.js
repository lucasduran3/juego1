export default class Game extends Phaser.Scene {
  //export default para poder importar desde otra clase
  constructor() {
    super("game");
  }
  init() {}
  preload(){
    this.load.image("sky","./assets/image/sky.png");
    this.load.image("ground","./assets/image/platform.png" );
    this.load.image("ninja","./assets/image/ninja.png" );
    this.load.image("keyR","./assets/image/keyR.png" );
    this.load.image("square","./assets/image/square.png" );
    this.load.image("triangle","./assets/image/triangle.png" );
    this.load.image("diamond","./assets/image/diamond.png" );
    this.load.image("win","./assets/image/win.png" );
    this.load.image("bgMenu","./assets/image/bgMenu.jpg" );
  }
  create() {
    //add background
    this.add.image(400, 300, "sky").setScale(0.555);
    //add static platforms group
    let platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    //add spites player
    this.player = this.physics.add.sprite(100, 450, "ninja");
    this.player.setCollideWorldBounds(true);
    //add shapes group
    this.shapesGroup = this.physics.add.group();
    this.shapesGroup.create(100, 0, 'diamond');
    this.shapesGroup.create(200, 0, 'triangle');
    this.shapesGroup.create(300, 0, 'square');
    this.shapesGroup.setCollideWorldBounds(true);

  }
  update() {}
}
