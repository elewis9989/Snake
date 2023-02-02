class Snake {
  xHead: number;
  yHead: number;
  xSpeed: number;
  ySpeed: number;
  bodyCount: number;
  trail: { x: number; y: number }[];

  constructor(initialSize: number) {
    this.xHead = 0;
    this.yHead = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.bodyCount = initialSize;
    this.trail = [{ x: this.xHead, y: this.yHead }];
  }

  draw = () => {
    // Snake Color
    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < this.trail.length; i++) {
      ctx.fillRect(this.trail[i].x, this.trail[i].y, scale - 1, scale - 1);

      if (this.trail[i].x == this.xHead && this.trail[i].y === this.yHead) {
        this.reset();
      }
    }
  };

  update = () => {
    this.trail.push({ x: this.xHead, y: this.yHead });
    while (this.trail.length > this.bodyCount) {
      this.trail.shift();
    }

    this.xHead += this.xSpeed;
    this.yHead += this.ySpeed;

    // If snake goes past edges, loop around
    if (this.xHead > gc.width) this.xHead = 0;

    if (this.xHead < 0) this.xHead = gc.width;

    if (this.yHead > gc.height) this.yHead = 0;

    if (this.yHead < 0) this.yHead = gc.height;
  };

  changeDireciton = (dir: string) => {
    switch (dir) {
      case 'Up':
        // Not going down
        if (this.xSpeed !== 0 && this.ySpeed !== scale) {
          this.xSpeed = 0;
          this.ySpeed = -scale;
        }
        break;

      case 'Down':
        // Not going up
        if (this.xSpeed !== 0 && this.ySpeed !== -scale) {
          this.xSpeed = 0;
          this.ySpeed = scale;
        }
        break;

      case 'Right':
        // Not going left
        if (this.xSpeed !== -scale && this.ySpeed !== 0) {
          this.xSpeed = scale;
          this.ySpeed = 0;
        }
        break;

      case 'Left':
        // Not going right
        if (this.xSpeed !== scale && this.ySpeed !== 0) {
          this.xSpeed = -scale;
          this.ySpeed = 0;
        }
        break;

      default:
        break;
    }
  };

  grow = () => {
    this.bodyCount++;
  };

  reset = () => {
    this.bodyCount = 2;
  };
}
