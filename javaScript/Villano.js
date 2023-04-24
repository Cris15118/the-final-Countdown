class Villano {
    constructor(positionX,){
        this.img = new Image()
        this.img.src = "imagenes/thanos_preview_rev_1.png" 
        this.x = positionX;
        this.y = 0;
        this.w = 90; 
        this.h = 80;
        this.speed = 0.5;
  
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = ()=>{
        
            this.y += this.speed
        
    }

}