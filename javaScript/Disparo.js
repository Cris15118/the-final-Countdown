class Disparo {
    constructor(positionX) {
      this.img = new Image()
      this.img.src = "imagenes/coleccion-iluminacion-escena-realista_52683-6710_preview_rev_1.png"
    this.x = positionX;
    this.y = 480;
    this.w = 15;
    this.h = 50;
    this.speedBala = 4;
  }
  drawBala = () => {
   ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
  };
  balaMove = () => {
    this.y -= this.speedBala;
  };
}
