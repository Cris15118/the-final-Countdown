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
    this.otroVillanoArray = []
    
      
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  villanosAparecen = () => {
    if (
      this.villanoArray.length === 0 ||
      this.villanoArray[this.villanoArray.length - 1].y > 80
    ) {
      let randomPositionX = Math.random() * 330;
      let nuevoVillano = new Villano(randomPositionX);
      this.villanoArray.push(nuevoVillano);
    }
  };
  otroVillanoAparece= () => {
    if (this.otroVillanoArray.length === 0 ||
      this.otroVillanoArray[this.otroVillanoArray.length - 1].y > 100
    ) {
      let randomPositionX = Math.random() * 250;
      let nuevoOtroVillano = new Otrovillano(randomPositionX);
      this.otroVillanoArray.push(nuevoOtroVillano);
    }
  };
  checkCollisionNaveOtro = () => { 
    this.otroVillanoArray.forEach((eachOtroVillano) => {
      if (
        eachOtroVillano.x < this.nave.x + this.nave.w &&
        eachOtroVillano.x + eachOtroVillano.w > this.nave.x &&
        eachOtroVillano.y < this.nave.y + this.nave.h &&
        eachOtroVillano.h + eachOtroVillano.y > this.nave.y
      ) {
        this.gameOver();
      }
    });
  };
  
  disparoAparece = ()=> {
    if(this.disparosArray.length === 0 || this.disparosArray[this.disparosArray.length -1].y < 500 ){
      let nuevoDisparo = new Disparo()
      this.disparosArray.push(nuevoDisparo)
      
    }
  }
  removeDisparo = () => {
    if (this.disparosArray[0].y + this.disparosArray[0].h <0 ) {
      this.disparosArray.shift();
       
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
    ctx.fillText("PUNTOS : "+ this.score, 20, 30);
  };
  drawLive = () => {
    ctx.font = "20px Comic Sans MS";
    ctx.fillText("VIDAS:  " + this.live , 200, 30);
    
  };
  //! preguntar marcador live
  removeVillano = () => {
    if (this.villanoArray[0].y + this.villanoArray[0].h > canvas.height &&  this.live >= 0 ) {
      this.villanoArray.splice(0, 1);
       this.live--
    }else if (this.villanoArray[0].y + this.villanoArray[0].h > canvas.height && this.live === 0 ){
      this.gameOver()
    }
    
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
    this.otroVillanoArray.forEach((eachOtroVillano)=>{
      eachOtroVillano.move()
    })
    this.villanosAparecen();
    this.otroVillanoAparece()
    this.checkCollisionNave();
    this.checkCollisionNaveOtro()
    this.removeVillano();
    this.naveOut();
    this.disparoAparece();
   
  
   

    // 3 dibujado de los elementos
    this.drawBackground();
    this.nave.draw();
   
    this.villanoArray.forEach((eachVillano) => {
      eachVillano.draw();
    });
    this.otroVillanoArray.forEach((eachOtroVillano)=>{
      eachOtroVillano.draw()
    })
    
    this.drawScore();
    this.drawLive();
    
      
        
     
   
    

    // 4. recursion

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
