class Game{
    constructor(){
        this.background = new Image()
        this.background.src = "imagenes/fondoGalaxia.png"
        this.nave = new Nave()

        this.isGameOn = true;

    }

    drawBackground = ()=>{
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }

    gameLoop = ()=>{
        // 1 limpieza del canvas

        // 2. acciones y movimientos de los elementos


        // 3 dibujado de los elementos
        this.drawBackground()
        this.nave.draw()

        // 4. recursion

        requestAnimationFrame(this.gameLoop)

    }
}