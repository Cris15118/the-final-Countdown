class Nave{
    constructor(){
        // propiedades de la nave
        this.img = new Image()
        this.img.src = "imagenes/Iron-man (1).png"
        this.x = canvas.width / 2;
        this.y = 490;
        this.w = 50;
        this.h = 100;
        this.Speed = 5;
    }
    draw = ()=>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    
    //! intentar usarlo en el addeventlistener de main
  //  move =(direction) => {
  //      if(direction==="left"){
  //          this.x -= 20
    
   //     }else if(direction==="right"){
 //        this.x += 20 
  //      }
    
   //    }
}