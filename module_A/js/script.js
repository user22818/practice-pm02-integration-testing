
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("results-screen"); 
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "Какой город являестя сталицей Франции?",
        answers: [
            {text: "Лондон", correct: false},
            {text: "Берлин", correct: false},
            {text: "Париж", correct: true},
            {text: "Мадрид", correct: false},
        ],
    },
    {
        question: "Сколько планет в Солнечной системе (без учёта карликовых)?",
        answers: [
            {text: "7", correct: false},
            {text: "8", correct: true},
            {text: "9", correct: false},
            {text: "10", correct: false},
        ],
    },
    {
        question: "Кто написал роман 'Война и мир'?",
        answers: [
            {text: "Ф.М. Достоевский", correct: false},
            {text: "Л.Н. Толстой", correct: true},
            {text: "А.С. Пушкин", correct: false},
            {text: "И.С. Тургенев", correct: false},
        ],
    },
    {
        question: "Какое самое большое озеро в мире (по площади)?",
        answers: [
            {text: "Байкал", correct: false},
            {text: "Каспийское море", correct: true},
            {text: "Верхнее", correct: false},
            {text: "Виктория", correct: false},
        ],
    },
    {
        question: "Какое животное является самым быстрым на суше?",
        answers: [
            {text: "Лев", correct: false},
            {text: "Гепард", correct: true},
            {text: "Антилопа", correct: false},
            {text: "Сокол", correct: false},
        ],
    },
    {
        question: "Какой газ необходим растениям для фотосинтеза?",
        answers: [
            {text: "Кислород", correct: false},
            {text: "Азот", correct: false},
            {text: "Углекислый газ", correct: true},
            {text: "Водород", correct: false},
        ],
    }
    
]

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {

    answersDisabled = false

    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)

        answersContainer.appendChild(button)
    })
}

function selectAnswer(event) {
    if(answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    })

    if(isCorrect) {
        score++
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionIndex++

        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 1000)
}

function showResults() {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if(percentage === 100) {
        resultMessage.textContent = "Идеально! Ты гений!"; 
    } else if (percentage >= 80) {
        resultMessage.textContent = "Отличная работа! Ты хорошо знаешь материал!"; 
    } else if (percentage >= 60) {
        resultMessage.textContent = "Хорошая попытка! Продолжай учиться!"; 
    } else if (percentage >= 40) {
        resultMessage.textContent = "Неплохо! Попробуй еще раз, чтобы улучшить результат!"; 
    } else {
        resultMessage.textContent = "Продолжай заниматься! У тебя обязательно получится лучше!"; 
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active")

    startQuiz()
}

