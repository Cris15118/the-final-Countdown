class Villano {
    constructor(positionX){
        this.img = new Image()
        this.img.src = "imagenes/thanos_preview_rev_1.png" 
        this.x = positionX;
        this.y = 0;
        this.w = 100; 
        this.h = 100;
        this.speed = 0.5;
  
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = ()=>{
        
            this.y += this.speed
        
    }

  //  gravity = ()=>{
       
   //         this.y  += this.speed
        
 //   }
}