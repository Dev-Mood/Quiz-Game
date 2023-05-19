var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: 0
    }
];

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var resultElement = document.getElementById("result");

function showQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";

    for (var i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i];
        var button = document.createElement("button");
        button.textContent = choice;
        button.value = i;
        button.onclick = checkAnswer;
        choicesElement.appendChild(button);
    }
}

function checkAnswer(event) {
    var selectedChoice = event.target.value;
    var question = questions[currentQuestion];

    if (selectedChoice == question.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    submitButton.style.display = "none";

    resultElement.textContent = "Your score: " + score + " out of " + questions.length;
    resultElement.style.display = "block";
}

showQuestion();
