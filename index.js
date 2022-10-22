//for player one

var randomNumber1 = Math.floor(Math.random() * 6)+1;

if (randomNumber1===1){
   document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (randomNumber1===2){
   document.querySelector(".img1").setAttribute("src","images/dice2.png");
}

else if (randomNumber1===3){
   document.querySelector(".img1").setAttribute("src","images/dice3.png");
}

else if (randomNumber1===4){
   document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (randomNumber1===5){
   document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if (randomNumber1===6){
   document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

// for second player

var randomNumber2 = Math.floor(Math.random() * 6)+1;

if (randomNumber2===1){
   document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (randomNumber2===2){
   document.querySelector(".img2").setAttribute("src","images/dice2.png");
}

else if (randomNumber2===3){
   document.querySelector(".img2").setAttribute("src","images/dice3.png");
}

else if (randomNumber2===4){
   document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2===5){
   document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if (randomNumber2===6){
   document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


// to broadcast message.


var value1 = randomNumber1;
var value2 = randomNumber2;
if ( value1 > value2 )
{
  document.querySelector("h1").innerHTML = "🏆Player 1 wins";
    
}

else if (value1 < value2){
     document.querySelector("h1").innerHTML = "Player 2 wins🏆";
}

else 
{
    document.querySelector("h1").innerHTML = "Draw 🤭";
}