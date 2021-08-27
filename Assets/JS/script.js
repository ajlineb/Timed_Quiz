// Selects element by class
var timeEl = document.querySelector(".time");
var startBtn = document.querySelector(".start");
var homeEl = document.querySelector(".home");
var customBtnEl = document.querySelector(".customBtn");
var inputEl = document.querySelector("#initials")

var question1 = document.querySelector(".question-1");
var question2 = document.querySelector(".question-2");
var question3 = document.querySelector(".question-3");
var question4 = document.querySelector(".question-4");
var question5 = document.querySelector(".question-5");
var summEl = document.querySelector(".summary");

var answerA = document.getElementsByClassName("a");
var answerB = document.getElementsByClassName("b");
var answerC = document.getElementsByClassName("c");
var answerD = document.getElementsByClassName("d");

var resultEl = document.querySelectorAll(".result");
var goToEl = document.querySelector(".end");
var finalPts = document.querySelector(".total-pts");



//answer variables
var a;
var b;
var c;
var d;

//question position variables
var on1;
var on2;
var on3;
var on4;
var on5;

//timer and point variables
var timer;
var points;
var secondsLeft;
var isFinished;
var initials;
var users = [];

//starts the quiz and alerts the timer
function startGame() {
    secondsLeft = 60;
    points = 0;
    timerStart();
    homeEl.style.display = "none";
    
    question_1();
};

//timer for the Quiz
function timerStart () {
  timer = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft >= 0) {
      if (isFinished && secondsLeft > 0) {
        clearInterval(timer);
        timeEl.textContent = "Done!"
      }
    }
    if (secondsLeft <= 0) {
      clearInterval(timer);
      timeEl.textContent = "Done!"
      notFinished();
    } 
  }, 1000);
};   

//displays the question
//checks to see if any of the answers choices are true and reacts based on which one is true
//once a choice is made, it will set all answers back to false for the next question and starts up the next question
function question_1() {
    question1.style.display = "inline-block";
    on1 = true;
    if (c === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        points += 20;
        resultEl[0].textContent = "Correct!";
        resultEl[0].style.display = "inline-block"
        setTimeout(function(){
            question_2();
        }, 1000); 
    }
    else if (a === true || b === true || d === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        resultEl[0].textContent = "Incorrect!";
        resultEl[0].style.display = "inline-block";
        secondsLeft-= 10;
        setTimeout(function(){
            question_2();
        }, 1000); 
    }
};


function question_2() {
    question1.style.display = "none";
    question2.style.display = "inline-block";
    on1 = false;
    on2 = true;
    if (d === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        points += 20;
        resultEl[1].textContent = "Correct!";
        resultEl[1].style.display = "inline-block"
        setTimeout(function(){
            question_3();
        }, 1000); 
    }
    else if (a === true || b === true || c === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        resultEl[1].textContent = "Incorrect!";
        resultEl[1].style.display = "inline-block";
        secondsLeft-= 10;
        setTimeout(function(){
            question_3();
        }, 1000); 
    }
}

function question_3() {
    question2.style.display = "none";
    question3.style.display = "inline-block";
    on2 = false;
    on3 = true;
    if (b === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        points += 20;
        resultEl[2].textContent = "Correct!";
        resultEl[2].style.display = "inline-block"
        setTimeout(function(){
            question_4();
        }, 1000); 
    }
    else if (a === true || d === true || c === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        resultEl[2].textContent = "Incorrect!";
        resultEl[2].style.display = "inline-block";
        secondsLeft-= 10;
        setTimeout(function(){
            question_4();
        }, 1000); 
    }
}

function question_4() {
    question3.style.display = "none";
    question4.style.display = "inline-block";
    on3 = false;
    on4 = true;
    if (c === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        points += 20;
        resultEl[3].textContent = "Correct!";
        resultEl[3].style.display = "inline-block"
        setTimeout(function(){
            question_5();
        }, 1000); 
    }
    else if (a === true || b === true || d === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        resultEl[3].textContent = "Incorrect!";
        resultEl[3].style.display = "inline-block";
        secondsLeft-= 10;
        setTimeout(function(){
            question_5();
        }, 1000); 
    }
}

function question_5() {
    question4.style.display = "none";
    question5.style.display = "inline-block";
    on4 = false;
    on5 = true;
    if (b === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        points += 20;
        resultEl[4].textContent = "Correct!";
        resultEl[4].style.display = "inline-block"
        setTimeout(function(){
            finished();
        }, 1000); 
    }
    else if (a === true || c === true || d === true) {
        a = false;
        b = false;
        c = false;
        d = false;
        resultEl[4].textContent = "Incorrect!";
        resultEl[4].style.display = "inline-block";
        secondsLeft-= 10;
        setTimeout(function(){
            finished();
        }, 1000); 
    }
}


//takes the user to the summary page immidiately
function notFinished() {
    question1.style.display ="none";
    question2.style.display ="none";
    question3.style.display ="none"; 
    question4.style.display ="none"; 
    question5.style.display ="none";
    summEl.style.display = "inline-block";
    finalPts.textContent = points;
    finalPts.style.display = "inline-block";
};

//takes the user to the summary page
function finished() {
    question5.style.display ="none";
    summEl.style.display = "inline-block";
    finalPts.textContent = points + "%";
    finalPts.style.display = "inline-block";
    isFinished = true;
};

function clearForm() {
    summEl.style.display = "none";
    goToEl.style.display = "inline-block";
}

function storeTodos() {
    localStorage.setItem("Users", JSON.stringify(users));
  }

//initializes the page to store any previous Users
function init() {
    var storedUsers = JSON.parse(localStorage.getItem("Users"));
    if (storedUsers !== null) {
      users = storedUsers;
    }
} 

//stores users into local storage
function storeUsers() {
    localStorage.setItem("Users", JSON.stringify(users));
}

//on submit pushes user info into array to be stored
customBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    var userText = inputEl.value.trim();
    if (userText === "") {
      return;
    }
    users.push({userText, points});
    inputEl.value = "";
   console.log(users)
    storeUsers();
    clearForm();
    //renderTodos();
});


//these functions assign the letter/choice that got chosen to true and all others to false
function checkAnswerA() {
    a = true;
    b = false;
    c = false;
    d = false;
    if (on1 === true) {
        question_1();
    }
    if (on2 === true) {
        question_2();
    }
    if (on3 === true) {
        question_3();
    }
    if (on4 === true) {
        question_4();
    }
    if (on5 === true) {
        question_5();
    }
};
function checkAnswerB() {
    b = true;
    a = false;
    c = false;
    d = false;
    if (on1 === true) {
        question_1();
    }
    if (on2 === true) {
        question_2();
    }
    if (on3 === true) {
        question_3();
    }
    if (on4 === true) {
        question_4();
    }
    if (on5 === true) {
        question_5();
    }
};
function checkAnswerC() {
    c = true;
    a = false;
    b = false;
    d = false;
    if (on1 === true) {
        question_1();
    }
    if (on2 === true) {
        question_2();
    }
    if (on3 === true) {
        question_3();
    }
    if (on4 === true) {
        question_4();
    }
    if (on5 === true) {
        question_5();
    }
};
function checkAnswerD() {
    d = true;
    a = false;
    b = false;
    c = false;
    if (on1 === true) {
        question_1();
    }
    if (on2 === true) {
        question_2();
    }
    if (on3 === true) {
        question_3();
    }
    if (on4 === true) {
        question_4();
    }
    if (on5 === true) {
        question_5();
    }
};

//starts the game quiz
startBtn.addEventListener("click", startGame);
init();

// had to create for loops that go through and put event listeners on each button
for (var i = 0; i < answerA.length; i++) {
    answerA[i].addEventListener("click", function () {
        checkAnswerA();
    });
}

for (var i = 0; i < answerB.length; i++) {
    answerB[i].addEventListener("click", function () {
        checkAnswerB();
    });
}

for (var i = 0; i < answerC.length; i++) {
    answerC[i].addEventListener("click", function () {
        checkAnswerC();
    });
}

for (var i = 0; i < answerD.length; i++) {
    answerD[i].addEventListener("click", function () {
        checkAnswerD();
    });
}