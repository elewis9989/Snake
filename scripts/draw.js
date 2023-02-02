/** Canvas Element */
var gc = document.querySelector('#gc');
/** 2D Rendering Context */
var ctx = gc.getContext('2d');
/** Grid Scale */
var scale = 10;
/** Grid Rows */
var rows = gc.height / scale;
/** Grid Columns */
var cols = gc.width / scale;
/** Current Score */
var currentScoreEl = document.querySelector('#current');
var currentScore = 0;
/** Highest Score */
var highestScoreEl = document.querySelector('#highest');
var highestScore = 0;
var snake;
var fruit;
var initialSize = 2;
var setup = function () {
    snake = new Snake(initialSize);
    fruit = new Fruit();
    snake.draw();
    window.addEventListener('keydown', function (ev) {
        var direction = ev.key.replace('Arrow', ''); // e.g. ArrowDown -> Down
        snake.changeDireciton(direction);
    });
    window.setInterval(function () {
        render();
    }, 150);
};
var render = function () {
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
//# sourceMappingURL=draw.js.map