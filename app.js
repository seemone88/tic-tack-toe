var clickSquare = document.querySelectorAll(".square");
var turn = 0;
var sq1 = document.querySelector("#sq1");
var sq2 = document.querySelector("#sq2");
var sq3 = document.querySelector("#sq3");
var sq4 = document.querySelector("#sq4");
var sq5 = document.querySelector("#sq5");
var sq6 = document.querySelector("#sq6");
var sq7 = document.querySelector("#sq7");
var sq8 = document.querySelector("#sq8");
var sq9 = document.querySelector("#sq9");
var xMove = [];
var oMove = [];
var button = document.querySelector("#reset");


for(i=0; i<clickSquare.length; i++) {
	clickSquare[i].addEventListener('click', function(){
      if (turn % 2 == 0) {
        this.innerText="X";
        console.log('X');
        turn++;
        xMove.push(this);
        winner();
        this.style.backgroundColor = 'black';
      }else if (turn >= 9){
        turn === null;

      }
      else {
        this.innerText="O";
        console.log("O");
        oMove.push(this);
        turn++;
        winner();
        this.style.backgroundColor = 'black';
      }

    });
}

function winner(){
               if(sq1.innerText === "X" && sq2.innerText === "X" && sq3.innerText === "X") {
                   victory();

               }
               else if(sq1.innerText === "X" && sq5.innerText === "X" && sq9.innerText === "X") {
                   victory();

               }
               else if(sq3.innerText === "X" && sq5.innerText === "X" && sq7.innerText === "X") {
                   victory();

               }
               else if(sq4.innerText === "X" && sq5.innerText === "X" && sq6.innerText === "X") {
                   victory();

               }
               else if(sq7.innerText === "X" && sq8.innerText === "X" && sq9.innerText === "X") {
                   victory();

               }
               else if(sq1.innerText === "X" && sq4.innerText === "X" && sq7.innerText === "X") {
                   victory();

               }
               else if(sq2.innerText === "X" && sq5.innerText === "X" && sq8.innerText === "X") {
                   victory();

               }
               else if(sq3.innerText === "X" && sq6.innerText === "X" && sq9.innerText === "X") {
                   victory();

               }
               else if(sq1.innerText == "O" && sq2.innerText == "O" && sq3.innerText == "O") {
                   victory();

               }
               else if(sq1.innerText == "O" && sq5.innerText == "O" && sq9.innerText == "O") {
                   victory();

               }
               else if(sq3.innerText == "O" && sq5.innerText == "O" && sq7.innerText == "O") {
                   victory();

               }
               else if(sq4.innerText == "O" && sq5.innerText == "O" && sq6.innerText == "O") {
                   victory();
               }
               else if(sq7.innerText == "O" && sq8.innerText == "O" && sq9.innerText == "O") {
                   victory();
               }
               else if(sq1.innerText == "O" && sq4.innerText == "O" && sq7.innerText == "O") {
                   victory();
               }
               else if(sq2.innerText == "O" && sq5.innerText == "O" && sq8.innerText == "O") {
                   victory();
               }
               else if(sq3.innerText == "O" && sq6.innerText == "O" && sq9.innerText == "O") {
                   victory();
              }
              else if (xMove.length + oMove.length >= 9){

                alert('Its a Draw');
              }

}
function victory(){
 alert('YOU WIN')
}
function reset() {
                sq1.innerText = '';
                sq2.innerText = '';
                sq3.innerText = '';
                sq4.innerText = '';
                sq5.innerText = '';
                sq6.innerText = '';
                sq7.innerText = '';
                sq8.innerText = '';
                sq9.innerText = '';
                turn = 0;
                xMove.length = 0;
                oMove.length = 0;
                sq1.style.backgroundColor = 'transparent';
                sq2.style.backgroundColor = 'transparent';
                sq3.style.backgroundColor = 'transparent';
                sq4.style.backgroundColor = 'transparent';
                sq5.style.backgroundColor = 'transparent';
                sq6.style.backgroundColor = 'transparent';
                sq7.style.backgroundColor = 'transparent';
                sq8.style.backgroundColor = 'transparent';
                sq9.style.backgroundColor = 'transparent';
            }

button.addEventListener('click', function(){
  reset();
});
function draw(){
  alert('It is a draw!');
}
