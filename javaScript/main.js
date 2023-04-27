//* VARIABLES GLOBALES
const splasScreenDOM = document.querySelector("#pantalla-principal");
const gameoverScreenDOM = document.querySelector("#pantalla-gameover");
const startBtnDOM = document.querySelector("#start-btn");
const pressBtnDOM = document.querySelector("#press-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const inicioBtnDOM = document.querySelector("#inicio");
const pauseBtnDOM = document.querySelector("#pause-btn")
const instruccionsDOM= document.querySelector("#instrucciones")
const pauseGameDOM = document.querySelector("#container-pause")
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
let gameObj;
let audioJuego = new Audio()
audioJuego.src = "audio/avengersPantallaJuego.mp3"
let audioIntro = new Audio()
audioIntro.src="audio/ringtonesTheAvengersPantallaInicio.mp3"
let audioFinal = new Audio()
audioFinal.src = "audio/avengersPantallaFinal.mp3"
const DisparoAudio = new Audio()
    DisparoAudio.src = "audio/disparo.mp3"

   const pausarAudioFinal = ()=>{
    if(audioFinal.paused=== false){
      audioFinal.pause()
    }

      audioFinal.currentTime = 0
      
    }
    pausarAudioIntro = ()=>{
      
        audioIntro.pause()
      audioIntro.currentTime = 0
      
      
    }
//* FUNCIONES DE ESTADO
const startDisparo = ()=>{
  DisparoAudio.play()
  DisparoAudio.volume = 0.08
 
}
const startAudioJuego = ()=>{
  audioJuego.volume = 0.05
  audioJuego.play()
  audioJuego.loop = true
  
}
const pauseAudioJuego = ()=>{
  audioJuego.pause()
  
}
const StartAudio =()=>{
  audioIntro.volume = 0.05
  audioIntro.play()
  audioIntro.loop = true
 
}
const instruccions = () => {
  splasScreenDOM.style.display = "none";
  instruccionsDOM.style.display = "block";
  StartAudio()
  
};

const startGame=()=>{
 
  instruccionsDOM.style.display = "none"
  pauseGameDOM.style.display = "block"
  gameObj= new Game()
  gameObj.gameLoop()
  
  pausarAudioIntro()
  startAudioJuego()
}
const  pauseGame = ()=>{
  if( gameObj.isGameOn === false ){
    gameObj.isGameOn =true
    gameObj.gameLoop()
  }else if (gameObj.isGameOn === true){
    gameObj.isGameOn = false
  }
  if (gameObj.isGameOn === false){
    pauseAudioJuego()
  }else{
    startAudioJuego()
  }
  
}

const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  pauseGameDOM.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
  pausarAudioFinal()
  startAudioJuego()
};
const inicioGame = ()=>{
    
    
  gameoverScreenDOM.style.display = "none"
  splasScreenDOM.style.display = "block"
  pausarAudioFinal()
  StartAudio()
}


//* ADD EVENT LISTENERRS
pressBtnDOM.addEventListener("click", instruccions)
startBtnDOM.addEventListener("click", startGame);
pauseBtnDOM.addEventListener("click", pauseGame)
pauseBtnDOM.addEventListener("keyup", (event)=>{
  event.preventDefault()
} )
restartBtnDOM.addEventListener("click", restartGame);
inicioBtnDOM.addEventListener("click", inicioGame )

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    gameObj.nave.x -= 25;
  } else if (event.code === "ArrowRight") {
    gameObj.nave.x += 25;
  }
});
window.addEventListener("keydown", (event)=>{
    if (gameObj !== undefined && event.code === "Space") {
      gameObj.disparoAparece()
      if (gameObj.isGameOn === true){
        startDisparo()
      }
      
      }
})

