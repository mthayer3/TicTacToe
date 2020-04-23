console.log("Hello There");

var squares = document.querySelectorAll('td');
var restartButton = document.querySelector('#restBut');
var counter = 0;
var gameOver = false;
var gameBoard = [0,1,2,3,4,5,6,7,8];

function clearBoard(){
  for(var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
    squares[i].addEventListener("click", changeMarker);
  }
  counter = 0;
}

function changeMarker(){
  if(this.textContent === '' && counter %2 === 0)
  {

    this.textContent = 'X';
    console.log(gameBoard);

    counter+=1;
    checkWin();

  }else if(this.textContent === '' && counter%2 != 0)
  {
    this.textContent = 'O';
    console.log(gameBoard);

    counter+=1;
    checkWin();
  }
}

function availableSpots(){
  var openSpots = [];
  for(var i = 0; i < squares.length; i++)
  {
    if(squares[i].textContent === ''){
      openSpots.push(i);
    }
  }
  return openSpots;
}

function endGame(){
  for(var i = 0; i<squares.length; i++)
  {
    squares[i].removeEventListener("click", changeMarker);
}
}

function minimax(newBoard, player){
  var availSpots = availableSpots()
}

function checkWin(){
  if(squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X')
  {
     gameOver = true;
     alert("Player X has won");
     endGame();
  }
  if(squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[6].textContent === 'X' && squares[7].textContent === 'X' && squares[8].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[0].textContent === 'X' && squares[4].textContent === 'X' && squares[8].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[0].textContent === 'X' && squares[3].textContent === 'X' && squares[6].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[1].textContent === 'X' && squares[4].textContent === 'X' && squares[7].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }
  if(squares[2].textContent === 'X' && squares[5].textContent === 'X' && squares[8].textContent === 'X')
  {
    gameOver = true;
    alert("Player X has won");
    endGame();
  }




  if(squares[0].textContent === 'O' && squares[1].textContent === 'O' && squares[2].textContent === 'O')
  {
    gameOver = true;
     alert("Player O has won");
     endGame();
  }
  if(squares[3].textContent === 'O' && squares[4].textContent === 'O' && squares[5].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[6].textContent === 'O' && squares[7].textContent === 'O' && squares[8].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[0].textContent === 'O' && squares[4].textContent === 'O' && squares[8].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[2].textContent === 'O' && squares[4].textContent === 'O' && squares[6].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[0].textContent === 'O' && squares[3].textContent === 'O' && squares[6].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[1].textContent === 'O' && squares[4].textContent === 'O' && squares[7].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }
  if(squares[2].textContent === 'O' && squares[5].textContent === 'O' && squares[8].textContent === 'O')
  {
    gameOver = true;
    alert("Player O has won");
    endGame();
  }

}


for(var j = 0; j < squares.length; j++){
  squares[j].addEventListener("click", changeMarker);
}

restartButton.addEventListener("click", clearBoard);
