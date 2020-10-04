var timer = document.querySelector(".timer");
var main = document.querySelector(".image");

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
  
    }, 1000);
}

function sendMessage() {
    timer.textContent = " ";

    var image = document.createElement("img");
    
    image.setAttribute("src", "Assets/game_over_image.png");
    main.appendChild(image);

}

setTime();