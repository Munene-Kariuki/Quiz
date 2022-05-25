// import { questions } from "./index";
var questions = [
  {
    question: 'Who is the best kenyan president',
    a: "Jomo Kenyatta",
    b: "Daniel arap Moi",
    c: "Mwai Kibaki",
    d: "uhuru Kenyatta",
    correct: "c"
  },
  {
    question: "Who is the best artist?",
    a: "Nyashinski",
    b: 'Bahati',
    c: "Pozze",
    d: "Mejja",
    correct: 'd'
  },
  {
    question: "Which is the best movie?",
    a: "Blacklist",
    b: 'Money heist',
    c: "Peaky blinders",
    d: "Prison break",
    correct: 'a'
  },
  {
    question: "Which is the best sitcom?",
    a: "How I met your mother",
    b: 'Friends',
    c: "Brooklyn nine nine",
    d: "Neighborhood",
    correct: 'b'
  },
  {
    question: "Most boring subject?",
    a: "English",
    b: 'Swahili',
    c: "Physics",
    d: "Math",
    correct: 'a'
  },
  {
    question: "worst addiction?",
    a: "Alcohol",
    b: 'Women',
    c: "Weed",
    d: "Sheesha",
    correct: 'b'
  }
];

var board = document.getElementById("quiz-board")
var questionH = document.getElementById("quest");
// var answerR = document.querySelectorAll("answer")
var ansA = document.getElementById("answer_a");
var ansB = document.getElementById("answer_b");
var ansC = document.getElementById("answer_c");
var ansD = document.getElementById("answer_d");
var submitBtn = document.getElementById("submit");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {

  var currentQuizData = questions[currentQuiz];

  questionH.innerText = currentQuizData.question;
  ansA.innerText = currentQuizData.a;
  ansB.innerText = currentQuizData.b;
  ansC.innerText = currentQuizData.c;
  ansD.innerText = currentQuizData.d;

}

function deselectAnswers(){
  answerR.forEach((answerW) => (answerW.checked = false));
}
// function getSelectedAnswer() {
//   var radioBtn = form.
// }

submitBtn.addEventListener("click", () => {
  selectedAnswer = document.forms["quiz"] ["ans"].value;
  currentQuiz++
  if (currentQuiz < questions.length) {
    loadQuiz();
  } else{
      board.innerHTML = "Your score:"
  }

});

// console.log(selectedAnswer)