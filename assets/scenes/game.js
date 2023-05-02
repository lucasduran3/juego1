import {SHAPES} from '../../util.js';
const {TRIANGLE, SQUARE, DIAMOND} = SHAPES;

export default class Game extends Phaser.Scene {
  //export default para poder importar desde otra clase
  score;
  constructor() {
    super("game");
  }

  init() {
    this.shapesRecolected = {
      [TRIANGLE]: {count: 0, score: 10},
      [SQUARE]: {count: 0, score: 20},
      [DIAMOND]: {count: 0, score: 30}
    };
    console.log(this.shapesRecolected);
  }

  preload() {
    this.load.image("sky", "./assets/image/sky.png");
    this.load.image("ground", "./assets/image/platform.png");
    this.load.image("ninja", "./assets/image/ninja.png");
    this.load.image("keyR", "./assets/image/keyR.png");
    this.load.image(SQUARE, "./assets/image/square.png");
    this.load.image(TRIANGLE, "./assets/image/triangle.png");
    this.load.image(DIAMOND, "./assets/image/diamond.png");
    this.load.image("win", "./assets/image/win.png");
    this.load.image("bgMenu", "./assets/image/bgMenu.jpg");
  }

  create() {
    //add background
    this.add.image(400, 300, "sky").setScale(0.555);

    //add static platforms group
    let platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    //add sprites player
    this.player = this.physics.add.sprite(100, 450, "ninja");
    this.player.setCollideWorldBounds(true);//colisione con los limites del juego

    //add shapes group
    this.shapesGroup = this.physics.add.group();

    //create events to add shapes
    this.time.addEvent({
      delay: 1500,
      callback: this.addShape, //cada vez que pase el tiempo se ejecuta esta funcion
      callbackScope: this, //callBackScope hace que el this haga referencia a la escena
      loop: true,
    });

    //create cursors
    this.cursors = this.input.keyboard.createCursorKeys();

    //add collider between player and platforms
    this.physics.add.collider(this.player, platforms); //Agregar colisones a la escena.Colision entre dos objetos.
    this.physics.add.collider(this.player, this.shapesGroup);
    this.physics.add.collider(platforms, this.shapesGroup);

    //add overlap between player and shapes
    this.physics.add.overlap(
      this.player,
      this.shapesGroup,
      this.collectShape,
      null,
      this
    );

    //add socre on scene
    this.score = 0;
    this.scoreText = this.add.text(20, 20, "Score:" + this.score,{
      fontSize: "32px",
      fontStyle: "bold",
      fill: "#FFF"
    });
  }

  update() {
    //update player movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-250);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(250);
    } else {
      this.player.setVelocityX(0);
    }
    //update player jump
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-300);
    }
  }

  addShape() {
    //get random shape
    const randomShape = Phaser.Math.RND.pick([DIAMOND, SQUARE, TRIANGLE]); //selecciona aleatoriamente una forma

    //get random position x
    const randomX = Phaser.Math.RND.between(32, 768);

    // add shape to screen
    this.shapesGroup.create(randomX, 0, randomShape).setCircle(25,7,7);;  

    console.log("shape is added", randomX, randomShape);
  }

  collectShape(player, shape){
    //remove shape from screen
    shape.disableBody(true, true);
    const shapeName = shape.texture.key; 
    this.shapesRecolected[shapeName].count++;

    this.score += this.shapesRecolected[shapeName].score;
    console.log(this.shapesRecolected[shapeName].score);
    this.scoreText.setText(`Score: ${this.score.toString()}`);//convierte la variable a un string

    console.log(this.shapeRecolected);
  }
}
