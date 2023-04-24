class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "imagenes/nuevofondo.avif";
    this.nave = new Nave();
    this.disparosArray = [];
    this.villanoArray = [];
    this.isGameOn = true;
    this.score = 0;
    this.live = 5;
    
      
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  villanosAparecen = () => {
    if (
      this.villanoArray.length === 0 ||
      this.villanoArray[this.villanoArray.length - 1].y > 50
    ) {
      let randomPositionX = Math.random() * 300;
      let nuevoVillano = new Villano(randomPositionX);
      this.villanoArray.push(nuevoVillano);
    }
  };
  disparoAparece = ()=> {
    if(this.disparosArray.length === 0 ){
      let nuevoDisparo = new Disparo()
      this.disparosArray.push(nuevoDisparo)
      
    }
  }
 colisionDisparos = ()=>{
  this.disparosArray.forEach((eachDisparo, eachVillano)=>{
if(eachDisparo.x < eachVillano.x + eachVillano.w &&
        eachDisparo.x + eachDisparo.w > eachVillano.x &&
        eachDisparo.y < eachVillano.y + eachVillano.h &&
        eachDisparo.h + eachDisparo.y > eachVillano.y){

        }
    this.villanoArray.splice(0,1)
  })

 }
  checkCollisionNave = () => {
    this.villanoArray.forEach((eachVillano) => {
      if (
        eachVillano.x < this.nave.x + this.nave.w &&
        eachVillano.x + eachVillano.w > this.nave.x &&
        eachVillano.y < this.nave.y + this.nave.h &&
        eachVillano.h + eachVillano.y > this.nave.y
      ) {
        this.gameOver();
      }
    });
  };
  gameOver = () => {
   
    this.isGameOn = false;
    canvas.style.display = "none";
    gameoverScreenDOM.style.display = "flex";
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  drawScore = () => {
    ctx.font = "20px Comic Sans MS";
    ctx.fillText("PUNTOS : 0", 20, 30);
  };
  drawLive = () => {
    ctx.font = "20px Comic Sans MS";
    ctx.fillText("VIDAS: 5 ", 200, 30);
  };
  //! preguntar marcador live
  removeVillano = () => {
    if (this.villanoArray[0].y + this.villanoArray[0].h > canvas.height &&  this.live > 0 ) {
      this.villanoArray.splice(0, 1);
       this.live--
    }else if (this.villanoArray[0].y + this.villanoArray[0].h > canvas.height && this.live === 0 ){
      this.gameOver()
    }
  

    //meter elsse if el villano pasa del canvas y no tengo vidas entonces game over
    
  };
  naveOut = () => {
    if (this.nave.x + this.nave.w > canvas.width) {
      this.nave.x = canvas.width - this.nave.w;
    } else if (this.nave.x < 0) {
      this.nave.x = 0;
    }
  };
  

  gameLoop = () => {
    // 1 limpieza del canvas
    this.clearCanvas();
    // 2. acciones y movimientos de los elementos
    this.villanoArray.forEach((eachVillano) => {
      eachVillano.move();
    });
    this.villanosAparecen();
    this.checkCollisionNave();
    this.removeVillano();
    this.naveOut();
    this.disparoAparece();
   
  
   

    // 3 dibujado de los elementos
    this.drawBackground();
    this.nave.draw();
   
    this.villanoArray.forEach((eachVillano) => {
      eachVillano.draw();
    });
    
    this.drawScore();
    this.drawLive();
    
      
        
     
   
    

    // 4. recursion

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
