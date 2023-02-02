class Fruit {
  x: number;
  y: number;

  constructor() {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
  }

  draw = () => {
    ctx.fillStyle = '#DB6363';
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  move = () => {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
  };
}
