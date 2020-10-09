// Test Question
var questions = [
    {q: "What file extension do you use for Javascript files?",
     a: [".java", ".script", ".js"],
     correct: ".js"
    },
    {q: "How do you define a variable?",
     a: ["variable x", "var = x", "var x"],
     correct: "var x"
    },
    {q: "What does the $ do in your script?",
     a: ["Calls jQuery Syntax", "Calls a Function", "Converts Number to $0.00"],
     correct: "Calls jQuery Syntax"
    },
    {q: "How do you create a prompt?",
     a: ["confirmPrompt(' ')", "promptBox(' ')", "prompt(' ')"],
     correct:"prompt(' ')",
    },
    {q: "What calls a function?",
     a: ["function = (i)", "function()", "func()"],
     correct:"function()",
    }
    ];
   
var score = 0;
var indexQ = 0;
var currentQ = questions[indexQ]; 

// Add Welcome Text to Main Page
var welcomeText = document.querySelector("#welcometext");
var startButton = document.querySelector("#start");
var headerStatic = document.querySelector("#header1");

// Create Header and Welcome Message
function renderWelcome() {
    welcomeText.textContent = "Time to test your Javascript knowledge! You have 90 seconds to finish the quiz, click start to begin!";  
}

renderWelcome()

function renderStatic() {
    headerStatic.textContent = "Coding Quiz";
}
renderStatic()

// Start Quiz/Timer Button
var startQuiz = document.querySelector("#start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".image");
var secondsLeft = 90;

startQuiz.addEventListener("click", function setTimer() { 

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;
        clearWelcome();
        
        if(secondsLeft === 0) {
            clearTimeout(timerInterval);
            sendMessage();
        } else {
            renderCodeQuiz()
        }
  
    }, 1000)

})




//Quiz
function renderCodeQuiz() {
    // Create Quiz Elements
    var display = document.querySelector("#questions-div");
    var createButton = document.createElement("button");
    var questionHead = document.querySelector("#question-title")
 

    display.innerHTML = " ";
    createButton.innerHTML = " ";
        

     // Go Through Questions
        for (var i = 0; i < questions.length; i++) {
            var questionContent = questions[indexQ].q;
            var answerContent = questions[indexQ].a;
            var currentQ = questions[indexQ]; 

            questionHead.textContent = questionContent;
        }

        answerContent.forEach(function (addChoices) {
            var options = document.createElement("button");
            options.textContent = addChoices;
            display.appendChild(createButton);
            createButton.appendChild(options);
            options.addEventListener("click", function() {
                
        var correctAnswer = questions[indexQ].correct;
        var el = event.target;
        if (el.matches("button")) {
                       
        var div = document.createElement("div");
        div.setAttribute("id", "div");
            
        if (el.textContent === correctAnswer ) {
            score = score + 1;
            console.log("score");
            nextQ();
        } else {
            score = score  - 1;
        nextQ();

         }
         }
    })
 })
}
var display = document.querySelector("#questions-div");
    function nextQ() {
    currentQ++
    if ((questions.length - 1)==(currentQ)) {
    quizComplete();
    display.textContent = "You finished the quiz! Your score is " + score + "out of " + questions.length;
    display.appendChild(div);
    scoreInput();
    
    } else {
        currentQ = currentQ + 1;
    } 
}

function quizComplete() {
    timer = " ";
    questions.remove();
}

function scoreInput() {
    var prompt = document.createElement("h1");
    var createInputForm = document.createElement("form");

    prompt.textContent = "Enter your name to save your score!"
    createInputForm.setAttribute("type", "text");   

}



// Game Over Image Function
function sendMessage() {
    timer.textContent = " ";

    var image = document.createElement("img");
    
    image.setAttribute("src", "Assets/game_over_image.png");
    main.appendChild(image);

}

// Take Welcome Image Away on Quiz Start
function clearWelcome() {
    welcomeText.textContent = " ";
    startButton.remove();
}