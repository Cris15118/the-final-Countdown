class Villano {
  constructor(positionX, speed) {
    this.img = new Image();
    this.img.src = "imagenes/thanos.png";
    this.x = positionX;
    this.y = 0;
    this.w = 70;
    this.h = 60;
    this.speed = speed;
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  move = () => {
    this.y += this.speed;
  };
}
