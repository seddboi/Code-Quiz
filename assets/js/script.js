// This starts the js file code off of the click of the start button
// const startBtn = start-button.addEventListener("click", applyToPage);

// Array of the quiz questions
questions = [
    { question: "What is the result of the following: \n2 + 3 - 5 * 2 + 7  ?",
    options: ['7', '4', '2', 'idk'],
    correctAns: '2' 
    },

    { question: "What is the name of the result from two numbers that are divided together ?",
    options: ['product', 'quotient', 'math is fake news', 'dividend'],
    correctAns: 'quotient'
    },

    { question: "Select largest value from the following below:",
    options: ['0.25', '2/5', '256/512', '2/3'],
    correctAns: '2/3' 
    },

    { question: "What is the following property called: \nx(y + z) = xy + xz ?",
    options: ['commutative property', 'associative property', 'identity property', 'distributive property'],
    correctAns: 'distributive property' 
    },

    { question: "What is the answer to the following equality: \n6 / 2 * (1 + 2) = ? ",
    options: ['9', '1', '3', '6'],
    correctAns: '9'
    }
];

// More declared variables
var score = 0;
var questionNumber = 0;

var mainQuestion = document.getElementById('main-question');
let choiceBoxes = document.getElementsByClassName('choice-box');

// -----------------------------------------------------------------------------
var visibleQuestion = questions[questionNumber].question;
var options = questions[questionNumber].options;
// -----------------------------------------------------------------------------

// This function adheres the questions to the boxes in the main quiz page
function applyToPage(questionNumber) {
    for (var i=0; i < questions.length; i++) {
        var visibleQuestion = questions[questionNumber].question;
        var possibleAnswers = questions[questionNumber].options;
        mainQuestion.textContent = visibleQuestion;
        questionNumber++;

        for (var x=0; options.length; x++) {
            choiceBoxes.textContent = possibleAnswers;
        }
        
    }
}
for (var i=0; i < questions.length; i++) {
    var visibleQuestion = questions[questionNumber].question;
    var possibleAnswers = questions[questionNumber].options;
    mainQuestion.textContent = visibleQuestion;
    questionNumber++;
}