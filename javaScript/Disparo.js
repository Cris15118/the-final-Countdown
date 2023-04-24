class Disparo {
    constructor() {
    this.x = canvas.width / 2;
    this.y = 500;
    this.balaRadius = 5;
    this.speedBala = 4;
  }
  drawBala = () => {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.balaRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  };
  balaMove = () => {
    this.y -= this.speedBala;
  };
}
