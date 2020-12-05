console.log("script loaded! "+Date() );

var game = document.querySelector(".container");
var countElement = document.createElement("h1");

game.appendChild(countElement);
countElement.classList.toggle("hide");
var btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    countDownTimer();
})

function throwDices(){
    var dice1 = document.querySelector('.dice1');
    var dice2 = document.querySelector('.dice2');
    dice1.innerHTML = "<img src='img/dice"+(Math.floor(Math.random()*6)+1)+"dots.svg'></img>"
    dice2.innerHTML = "<img src='img/dice"+(Math.floor(Math.random()*6)+1)+"dots.svg'></img>"
    
}

function countDownTimer(){
    
    btn.classList.toggle("hide");
    var i=2;
    countElement.innerText =3;
    countElement.classList.toggle("hide");
    var x = setInterval(()=>{
        countElement.innerText=i;
        i--;
        if (i < 0) {
            clearInterval(x);
            countElement.classList.toggle("hide");
            throwDices();
            btn.classList.toggle("hide");
          }
    },1000)
}




