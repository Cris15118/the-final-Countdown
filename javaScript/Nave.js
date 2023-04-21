class Nave{
    constructor(){
        // propiedades de la nave
        this.img = new Image()
        this.img.src = "imagenes/Iron-man (1).png"
        this.x = canvas.width / 2;
        this.y = 490;
        this.w = 50;
        this.h = 100;
        this.gravitySpeed = 2;
        this.jumpSpeed = 60;
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}