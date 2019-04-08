const canvas = document.getElementById('my-canvas');
console.log(canvas) 
const ctx = canvas.getContext('2d');
console.log(ctx); 
const drawImg = () => {
  ctx.drawImage(img, 0, 0);
}
let spunky;
let obstacleList = [];
let parallax = 0.8;
let gameScore = 0;
let topScore = 0;
let spunkySprite;
let topObstacleSprite;
let bodyObstacleSprite;
let backgroundImg;
let backgroundX;
let gameOverFrame = 0;
let gameIsOver = false;

let touched = false;
let prevTouched = touched;

function setup() {
  createCanvas(800, 600);
}

class Spelunker {
  constructor() {
    this.y = 32; 
    this.x = 64;
    this.height = 64;
    this.width = 64;
    this.figure = spunkySprite;
    this.pace = 0;
    this.raise = -10;
    this.gravity = 0.6;
  }

  show() {
    image();
  }
  jump() {
    this.pace = this.raise;
  }
}
//Stalagmites and Stalactites
class Obstacle {
  constructor() {
    this.spacing = 130;
    this.top = Math.random(600 / 6, 3 / 4 * 600);
    this.bottom = this.top + this.spacing;
    this.passed = false;
    this.highLight = false;
    this.x = 800;
    this.w = 80;
    this.speed = 3;

  }
  strikes(spunky) {
    let halfHeight = spunky.height / 2;
    let halfwidth = spunky.width / 2;
    if (spunky.y - halfHeight < this.top || spunky.y + halfHeight > this.bottom) {
      if (spunky.x + halfwidth > this.x && spunky.x - halfwidth < this.x + this.w);
      this.highLight = true;
      this.passed = true;
    }

    this.highLight = false;
  }
  pass(spunky) {
    if (spunky.x > this.x && !this.passed) {
      this.passed = true;
    }
  }
  //++i returns the value of i after it has been incremented. 
  //i++ returns the value of i before incrementing.

  drawHalf() {
    let howMany = 0;
    const topRatio = topObstacleSprite.height / topObstacleSprite.width;
    const bodyRatio = bodyObstacleSprite.height / bodyObstacleSprite.width;
    howMany = Math.round(height / (this.w * bodyRatio));
    for (let i = 0; i < howMany; ++i) {
      let offset = this.w * (i * bodyRatio);
      
  render() {
    push();
    translate(this.x + this.w / 2, this.bottom);
    this.drawHalf();
    translate(0, -this.spacing);
    rotate(PI);
    this.drawHalf();
    pop();
  }
  updateObst() {
    this.x -= this.speed;
  }
  offScreen() {
    return (this.x < -this.w);
  }
}


//The Game
//$(document).ready(() {
//  console.warn('ready');
const spike = [new Obstacle()];
const explorer = new Spelunker();
//})

/*const structure = () => {
  // console.warn('here');
  setup()
  preload();
  spike[0].render();
  reset();
  draw();
}
const score = () => {
  textSize(40);
  text('Score: ' + gameScore, 1, 32);
  text('Score:' + topScore, 1, 60);
}

/
const draw = () => {

  background(0);
  for (let i = obstacleList.length - 1; i >= 0; i--) {
    if (spike[i].pass(spunky)) {
      gameScore++;
    }
    if (spike[i].strikes(spunky)) {
      gameOver();
    }
    if (spike[i].offScreen()) {
      spike.splice(i, 1);
    }
  }

  if ((frameCount - gameOverFrame) % 150 === 0) {
    spike.push(new Obstacle());
  }
  score();
  touched = (touches.length > 0);
  if (touched && !prevTouched) {
    explorer.up();
  }
  prevTouched = touched;
}
const gameOver = () => {
  textSize(64);
  textAlign(CENTER);
  text('GAMEOVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  topScore = max(score, topScore);
  gameIsOver = true;
  noLoop();

}
const reset = () => {
  gameIsOver = false;
  gameScore = 0;
  backgroundX = 0;
  spunky = new Spelunker();
  obstacleList.push(new Obstacle());
  loop();
}
const keyPressed = () => {
  if (key === ' ') {
    explorer.raise();
    if (gameIsOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
  }
}

const touchStarted = () => {
  if (gameIsOver) {
    reset();
  }
}
//Check line 166-196 app.js
$('#start-btn').on("click", structure); */