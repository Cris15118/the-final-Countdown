//* VARIABLES GLOBALES
const splasScreenDOM = document.querySelector("#pantalla-principal");
const gameoverScreenDOM = document.querySelector("#pantalla-gameover");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
let gameObj;


//* FUNCIONES DE ESTADO

const startGame = ()=>{
    console.log("Iniciando")
    splasScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  console.log(gameObj);
  gameObj.gameLoop()
}
const restartGame = ()=>{
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block";
    gameObj = new Game();
    gameObj.gameLoop()
}


//* ADD EVENT LISTENERRS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame)
window.addEventListener("keydown",(event)=>{
    if(event.code === "ArrowLeft"){
        this.x -= 20
    }else if (event.code === "ArrowRight"){
        this.x += 20
    }
    
})