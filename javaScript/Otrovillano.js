class Otrovillano {
    constructor(positionX,){
        this.img = new Image()
        this.img.src = "imagenes/loki.png" 
        this.x = positionX;
        this.y = 0;
        this.w = 40; 
        this.h = 40;
        this.speed = 1; 
        this.gravity = 1.5
  
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = ()=>{
        
            this.y += this.speed*this.gravity
        
    }

}     