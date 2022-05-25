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

var startButton = document.getElementById("startBtn")
var questionsContainerElement = document.getElementById("questions-container")
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answerBtns")


// start button calls startQuiz() 
startButton.addEventListener('click', startQuiz)


// shuffles questions and populates them in questions container once you click start 
function startQuiz() {
  console.log("started")
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionsContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question
  question.a, b, c, d. foreach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer == question.correct){
      
    }
  })
}

function selectAnswer() {

}