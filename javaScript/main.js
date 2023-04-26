//* VARIABLES GLOBALES
const splasScreenDOM = document.querySelector("#pantalla-principal");
const gameoverScreenDOM = document.querySelector("#pantalla-gameover");
const startBtnDOM = document.querySelector("#start-btn");
const pressBtnDOM = document.querySelector("#press-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const inicioBtnDOM = document.querySelector("#inicio");
const instruccionsDOM= document.querySelector("#instrucciones")
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
let gameObj;

//* FUNCIONES DE ESTADO

const instruccions = () => {
  splasScreenDOM.style.display = "none";
  instruccionsDOM.style.display = "block";
  
  
};

const startGame=()=>{
  console.log("press")
  instruccionsDOM.style.display = "none"
  canvas.style.display = "block"
  gameObj= new Game()
  gameObj.gameLoop()
}



const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};
const inicioGame = ()=>{
  gameoverScreenDOM.style.display = "none"
  splasScreenDOM.style.display = "block"
}


//* ADD EVENT LISTENERRS
pressBtnDOM.addEventListener("click", instruccions)
startBtnDOM.addEventListener("click", startGame);
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
       

     
    
    
      }
})