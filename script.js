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
        } else codeQuiz();
  
    }, 1000)
})

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

// Test Question
    var questions = [
        {   q: "What file extension do you use for Javascript files?",
            a: [".java", ".script", ".js"],
            correct: ".js"
            },
        {   q: "How do you define a variable?",
            a: ["variable x", "var = x", "var x"],
            correct: "var x"
            },
        {   q: "What does the $ do in your script?",
            a: ["Calls jQuery Syntax", "Calls a Function", "Converts Number to $0.00"],
            correct: "Calls jQuery Syntax"
            },
        {   q: "How do you create a prompt?",
            a: ["confirmPrompt(' ')", "promptBox(' ')", "prompt(' ')"],
            correct:"prompt(' ')",
            },
        {   q: "What calls a function?",
            a: ["function = (i)", "function()", "func()"],
            correct:"function()",
            }
      ];

    var score = 0;
    var indexQ = 0;
    

    function codeQuiz() {
        var display = document.querySelector("#questions-div");
        var createButton = document.createElement("button");
        var questionHead = document.querySelector("#question-title")
        display.innerHTML = "";
        createButton.innerHTML = "";

        // Go Through Questions
        for (var i = 0; i < questions.length; i++) {
            var questionContent = questions[indexQ].q;
            var answerContent = questions[indexQ].a;
            questionHead.textContent = questionContent;
        }

        answerContent.forEach(function (addChoices) {
            var options = document.createElement("button");
            options.textContent = addChoices;
            display.appendChild(createButton);
            createButton.appendChild(options);
            options.addEventListener("click", (check));
        }
        

// // High Score Page
// var highScoreInput = document.querySelector("#");
// var highScoreForm = document.querySelector("#");
// var highScoreList = document.querySelector("#");
// var highScoreSpan = document.querySelector("#");

// var hsList = [];

// init();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   highScoreList.innerHTML = "";
//   highScoreSpan.textContent = hsList.length;

//   // Render a new li for each todo
//   for (var i = 0; i < hsList.length; i++) {
//     var highScore = hsList[i];

//     var li = document.createElement("li");
//     li.textContent = highScore;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Submit";

//     li.appendChild(button);
//     highScoreList.appendChild(li);
//   }
// }

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

