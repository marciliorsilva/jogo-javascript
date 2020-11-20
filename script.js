let canvas = document.getElementById("snake");
let contex = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
function criarBG(){
    contex.fillStyle = "lightgreen";
    contex.fillRect(0, 0, 16 * box, 16 *box);

}

function criarCobrinha(){
  for (let index = 0; index < snake.length; index++) {
      contex.fillStyle = "green";
      contex.fillRect(snake[index].x, snake[index].y, box, box)
      
  }
}
criarBG();
criarCobrinha();