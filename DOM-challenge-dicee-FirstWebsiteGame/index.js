var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!🚩";
} 
else {
    document.querySelector("h1").textContent = "It is a 🚩 draw!";
}