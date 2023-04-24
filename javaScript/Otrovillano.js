class Otrovillano {
    constructor(positionX,){
        this.img = new Image()
        this.img.src = "imagenes/loki_preview_rev_1.png" 
        this.x = positionX;
        this.y = 0;
        this.w = 50; 
        this.h = 50;
        this.speed = 0.5;
  
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = ()=>{
        
            this.y += this.speed
        
    }

}