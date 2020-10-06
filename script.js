var startQuiz = document.querySelector(".start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".image");

var secondsLeft = 90;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;
        
        if(secondsLeft === 0) {
            clearTimeout(timerInterval);
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



