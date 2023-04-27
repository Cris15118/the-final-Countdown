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
    this.otroVillanoArray = [];
    this.gemaArray = [];
    this.speedOtroVillano = 1;
    this.speedVillano = 1;
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  gemaAparece = () => {
    if (
      this.gemaArray.length === 0 ||
      this.gemaArray[this.gemaArray.length - 1].y > 1500
    ) {
      let randomPositionX = Math.random() * 330;
      let nuevaGema = new Gemas(randomPositionX);
      this.gemaArray.push(nuevaGema);
    }
  };
  audioGemas = () => {
    let cogerVidas = new Audio();
    cogerVidas.src = "audio/cuandoCogeRecargasVidas.mp3";
    cogerVidas.volume = 0.08;
    cogerVidas.play();
  };
  colisionGemas = () => {
    this.gemaArray.forEach((eachGema) => {
      if (
        eachGema.x < this.nave.x + this.nave.w &&
        eachGema.x + eachGema.w > this.nave.x &&
        eachGema.y < this.nave.y + this.nave.h &&
        eachGema.h + eachGema.y > this.nave.y
      ) {
        this.gemaArray.shift();
        this.live++;
        this.audioGemas();
      }
    });
  };
  villanosAparecen = () => {
    if (
      this.villanoArray.length === 0 ||
      this.villanoArray[this.villanoArray.length - 1].y > 80
    ) {
      let randomPositionX = Math.random() * 330;
      let nuevoVillano = new Villano(randomPositionX, this.speedVillano);
      this.villanoArray.push(nuevoVillano);
      if (this.villanoArray.length === 3) {
        this.speedVillano += 0.08;
      }
    }
  };
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
  otroVillanoAparece = () => {
    if (
      this.otroVillanoArray.length === 0 ||
      this.otroVillanoArray[this.otroVillanoArray.length - 1].y > 100
    ) {
      let randomPositionX = Math.floor(Math.random() * 250);
      let nuevoOtroVillano = new Otrovillano(
        randomPositionX,
        this.speedOtroVillano
      );
      this.otroVillanoArray.push(nuevoOtroVillano);
      if (this.otroVillanoArray.length === 3) {
        this.speedOtroVillano += 0.08;
      }
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
  disparoAparece = () => {
    if (
      this.disparosArray.length === 0 ||
      this.disparosArray[this.disparosArray.length - 1].y < 400
    ) {
      let nuevoDisparo = new Disparo(this.nave.x);
      this.disparosArray.push(nuevoDisparo);
    }
  };
  colisionDisparos = () => {
    this.villanoArray.forEach((eachVillano, indexVillano) => {
      this.disparosArray.forEach((eachDisparo, indexDisparo) => {
        if (
          eachVillano.x < eachDisparo.x + eachDisparo.w &&
          eachVillano.x + eachVillano.w > eachDisparo.x &&
          eachVillano.y < eachDisparo.y + eachDisparo.h &&
          eachVillano.h + eachVillano.y > eachDisparo.y
        ) {
          this.villanoArray.splice(indexVillano, 1);
          this.disparosArray.splice(indexDisparo, 1);
          this.score += 5;
          this.crashVillano();
        }
      });
    });
    this.otroVillanoArray.forEach((eachOtroVillano, indexOtroVillano) => {
      this.disparosArray.forEach((eachDisparo, indexDisparo) => {
        if (
          eachOtroVillano.x < eachDisparo.x + eachDisparo.w &&
          eachOtroVillano.x + eachOtroVillano.w > eachDisparo.x &&
          eachOtroVillano.y < eachDisparo.y + eachDisparo.h &&
          eachOtroVillano.h + eachOtroVillano.y > eachDisparo.y
        ) {
          this.otroVillanoArray.splice(indexOtroVillano, 1);
          this.disparosArray.splice(indexDisparo, 1);
          this.score += 2;
          this.crashVillano();
        }
      });
    });
  };
  removeDisparo = () => {
    if (
      this.disparosArray.length !== 0 &&
      this.disparosArray[0].y + this.disparosArray[0].h < 0
    ) {
      this.disparosArray.shift();
    }
  };
  crashVillano = () => {
    let crashAudio = new Audio();
    crashAudio.src = "audio/crash.mp3";
    crashAudio.volume = 0.08;
    crashAudio.play();
  };
  risaMalvada = () => {
    let risaMalvada = new Audio();
    risaMalvada.src = "audio/risaMalvada.mp3";
    risaMalvada.volume = 0.06;
    risaMalvada.play();
  };
  audioGameover = () => {
    audioFinal.volume = 0.05;
    audioFinal.play();
    audioFinal.loop = true;
  };
  pauseAudioJuego = () => {
    audioJuego.pause();
    audioJuego.currentTime = 0;
  };
  gameOver = () => {
    this.isGameOn = false;
    pauseGameDOM.style.display = "none";
    gameoverScreenDOM.style.display = "flex";
    this.audioGameover();
    this.risaMalvada();
    this.pauseAudioJuego();
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  drawScore = () => {
    ctx.font = "20px Impact";
    ctx.fillText("PUNTOS : " + this.score, 30, 30);
  };
  drawLive = () => {
    ctx.font = "20px Impact";
    ctx.fillText("VIDAS:  " + this.live, 180, 30);
  };
  gameoverLive = () => {
    if (
      this.villanoArray.length !== 0 &&
      this.villanoArray[0].y + this.villanoArray[0].h > canvas.height &&
      this.live >= 0
    ) {
      this.live--;
      this.villanoArray.shift();
    } else if (
      this.otroVillanoArray.length !== 0 &&
      this.otroVillanoArray[0].y + this.otroVillanoArray[0].h > canvas.height &&
      this.live >= 0
    ) {
      this.live--;
      this.otroVillanoArray.shift();
    } else if (this.live === 0) {
      this.gameOver();
    }
  };
  naveOut = () => {
    if (this.nave.x + this.nave.w > canvas.width) {
      this.nave.x = canvas.width - this.nave.w;
    } else if (this.nave.x < 0) {
      this.nave.x = 0;
    }
  };
  noMasLive = () => {
    if (this.live >= 5) {
      this.live = 5;
    }
  };

  gameLoop = () => {
    
    this.clearCanvas();
    this.villanoArray.forEach((eachVillano) => {
      eachVillano.move();
    });
    this.otroVillanoArray.forEach((eachOtroVillano) => {
      eachOtroVillano.move();
    });
    this.gemaArray.forEach((eachGema) => {
      eachGema.move();
    });
    this.villanosAparecen();
    this.otroVillanoAparece();
    this.gemaAparece();
    this.checkCollisionNave();
    this.checkCollisionNaveOtro();
    this.colisionDisparos();
    this.naveOut();
    this.removeDisparo();
    this.colisionGemas();
    this.gameoverLive();
    this.noMasLive();
    this.disparosArray.forEach((eachDisparo) => {
      eachDisparo.balaMove();
     
    });

    
    this.drawBackground();
    this.nave.draw();

    this.villanoArray.forEach((eachVillano) => {
      eachVillano.draw();
    });
    this.otroVillanoArray.forEach((eachOtroVillano) => {
      eachOtroVillano.draw();
    });
    this.disparosArray.forEach((eachDisparo) => {
      eachDisparo.drawBala();
     
    });
    this.gemaArray.forEach((eachGema) => {
      eachGema.draw();
    });
    this.drawScore();
    this.drawLive();

 

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
