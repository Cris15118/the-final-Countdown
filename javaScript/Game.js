class Game{
    constructor(){
        this.background = new Image();
        this.background.src = "imagenes/nuevofondo.avif"
        this.nave = new Nave();
        this.villanoArray = [];
        this.isGameOn = true;

    } 

    drawBackground = ()=>{
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }
    villanoAparece = ()=>{
        if(this.villanoArray.length === 0 || this.villanoArray[this.villanoArray.length -1].y < 300){
            let randomPositionX = Math.random()* 400
            let nuevoVillano = new Villano(randomPositionX, true)
            this.villanoArray.push(nuevoVillano)
        }
    }
   

    gameLoop = ()=>{
        // 1 limpieza del canvas

        // 2. acciones y movimientos de los elementos
      
        this.villanoArray.forEach((eachVillano) => {
            eachVillano.move()
          })
          this.villanoAparece()

        // 3 dibujado de los elementos
        this.drawBackground()
        this.nave.draw()
        this.villanoArray.forEach((eachVillano)=>{
            eachVillano.draw()
        })

        // 4. recursion

        requestAnimationFrame(this.gameLoop)

    }
}