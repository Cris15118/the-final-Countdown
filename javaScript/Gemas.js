class Gemas {
  constructor(positionX) {
    this.img = new Image();
    this.img.src = "imagenes/gemasDelInfinito3.png";
    this.x = positionX;
    this.y = 0;
    this.w = 20; 
    this.h = 20;
    this.speed = 2;
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  move = () => {
    this.y += this.speed;
  };
}
