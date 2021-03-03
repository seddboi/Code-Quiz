var mainQuestion = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('#answer-choice'));

var questions = [
    {question: "What is the proper syntax for a HTML body tag?",
    opt1: "(body)(/body)",
    opt2: "[body][/body]", 
    opt3: "<body></body>",
    opt4: "<body><body>",
    correctAnswer: 3, } 
    ,
    {question: "What does the?",
    opt1: "(body)(/body)",
    opt2: "[body][/body]", 
    opt3: "<body></body>",
    opt4: "<body><body>",
    correctAnswer: 3, } 
    ,
    {question: "What is the proper syntax for a HTML body tag?",
    opt1: "(body)(/body)",
    opt2: "[body][/body]", 
    opt3: "<body></body>",
    opt4: "<body><body>",
    correctAnswer: 3, } 
    ,
    {question: "What is the proper syntax for a HTML body tag?",
    opt1: "(body)(/body)",
    opt2: "[body][/body]", 
    opt3: "<body></body>",
    opt4: "<body><body>",
    correctAnswer: 3, } ,

];

var questionShown = {};
var rightAnswers = true;
var grade = 0;
var qPosition = 0;
var totalQuestions = [];

