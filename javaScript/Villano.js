class Villano {
    constructor(positionX){
        this.img = new Image()
        this.img.src = "imagenes/thanos (2).png"
        this.x = positionX;
        this.y = 0;
        this.w = 200;
        this.h = 200;
        this.Speed = 4;
 
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    move = ()=>{
        this.y -= this.Speed
    }
}