/** Canvas Element */
const gc = <HTMLCanvasElement>document.querySelector('#gc');
/** 2D Rendering Context */
const ctx = gc.getContext('2d');
/** Grid Scale */
const scale = 10;
/** Grid Rows */
const rows = gc.height / scale;
/** Grid Columns */
const cols = gc.width / scale;
/** Current Score */
const currentScoreEl = <HTMLElement>document.querySelector('#current');
let currentScore = 0;
/** Highest Score */
const highestScoreEl = <HTMLElement>document.querySelector('#highest');
let highestScore = 0;

let snake: Snake;
let fruit: Fruit;
const initialSize = 2;

const setup = () => {
  snake = new Snake(initialSize);
  fruit = new Fruit();

  snake.draw();

  window.addEventListener('keydown', (ev) => {
    const direction = ev.key.replace('Arrow', ''); // e.g. ArrowDown -> Down
    snake.changeDireciton(direction);
  });

  window.setInterval(() => {
    render();
  }, 150);
};

const render = () => {
  // Erase previously drawn context
  ctx.clearRect(0, 0, gc.width, gc.height);
  snake.update();
  fruit.draw();
  snake.draw();

  // Eat fruit
  if (snake.xHead === fruit.x && snake.yHead === fruit.y) {
    snake.grow();
    fruit.move();

    currentScore++;
    currentScoreEl.innerHTML = currentScore.toString();
  }

  if (currentScore > 0 && snake.bodyCount === initialSize) {
    // Snake was reset
    currentScore = 0;
    currentScoreEl.innerHTML = currentScore.toString();
  }

  if (currentScore > highestScore) {
    highestScore = currentScore;
    highestScoreEl.innerHTML = highestScore.toString();
  }
};

setup();
