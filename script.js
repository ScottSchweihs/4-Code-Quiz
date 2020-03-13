var question1 = {
    question: "How do you write 'Hello World' in an alert box?",
    answer1: "alert('Hello World')",
    answer2: "alert ('Hello World');",
    answer3: "print ('Hello World')",
    answer4: "cout << 'Hello World!';",
    correctanswer: "anserChoices2"
}

var question2 = {
    question: "How do you write 'Hello World' in the console?",
    answer1: "console.print ('Hello World');",
    answer2: "console('Hello World')",
    answer3: "console.log ('Hello World');",
    answer4: "console.log = 'Hello World!';",
    correctanswer: "answerChoice3"
}

var question3 = {
    question: "How do you write an if statement",
    answer1: "if () {}",
    answer2: "if {} ()",
    answer3: "if.true === () {}",
    answer4: "if = true;",
    correctanswer: "answerChoice1"
}

var questionsArray = [question1, question2, question3];
var randomQuestion;

var oldQuestions = [];
var canUseQuestion;

$('.prevButton').hide();
$('.nextButton').hide();

var userChoice;

var numCorrect;
var numIncorrect;

$(document).ready(function () {

    function checkAnswer () {
        if (randomQuestion.correctanswer === userChoice) {
            numCorrect + 1;
        }
        else {
            numIncorrect + 1;
        }
    }

    function newQuestion (randNumValue) {
        oldQuestions.push (randNumValue);
        console.log (oldQuestions);
        if (oldQuestions[oldQuestions.length - 1] === oldQuestions[oldQuestions.length]) {
            canUseQuestion = false;
        }
        else {
            canUseQuestion = true;
        }

        if (canUseQuestion) {
            randomQuestion = questionsArray[randNumValue];
            displayQuestion();
            newStyle();
        }
        else {
            newQuestion();
        }
    }

    function displayQuestion () {
        $('.questionText').text (randomQuestion.question);
        $('.answerChoice1').text (randomQuestion.answer1);
        $('.answerChoice2').text (randomQuestion.answer2);
        $('.answerChoice3').text (randomQuestion.answer3);
        $('.answerChoice4').text (randomQuestion.answer4); 
    }

    function newStyle () {

        $('.startButtonDiv').hide();
        $('.prevButton').show();
        $('.nextButton').show();

        $('.questionText').css ("margin-bottom", "30px");

        $('.questionBox').css ("background-color", "white");
        $('.questionBox').css ("padding", "20px");
        $('.questionBox').css ("border-style", "solid");
        $('.questionBox').css ("border-width", "5px");
        $('.questionBox').css ("border-color", "#00994d");
        $('.questionBox').css ("border-radius", "10px");
        $('.questionBox').css ("margin-bottom", "20px");

        $('.answerChoice1').css ('background-color', 'white');
        $('.answerChoice2').css ('background-color', 'white');
        $('.answerChoice3').css ('background-color', 'white');
        $('.answerChoice4').css ('background-color', 'white');

    }

    $('.startButton').click(function() {
        var randNum = Math.floor(Math.random() * 2);
        randomQuestion = questionsArray[randNum];
        displayQuestion();
        newStyle();
    });

    $('.prevButton').click(function() {

    });

    $('.nextButton').click(function() {
        checkAnswer();
        var randNum = Math.floor(Math.random() * 2);
        newQuestion(randNum);
    });

    $('.answerChoice1').click(function () {
        userChoice = "answerChoice1"

        $(this).css ('background-color', '#00994d');
        $('.answerChoice2').css ('background-color', 'white');
        $('.answerChoice3').css ('background-color', 'white');
        $('.answerChoice4').css ('background-color', 'white');
    });

    $('.answerChoice2').click(function () {
        userChoice = "answerChoice2"

        $(this).css ('background-color', '#00994d');
        $('.answerChoice1').css ('background-color', 'white');
        $('.answerChoice3').css ('background-color', 'white');
        $('.answerChoice4').css ('background-color', 'white');
    });

    $('.answerChoice3').click(function () {
        userChoice = "answerChoice3"

        $(this).css ('background-color', '#00994d');
        $('.answerChoice1').css ('background-color', 'white');
        $('.answerChoice2').css ('background-color', 'white');
        $('.answerChoice4').css ('background-color', 'white');
    });

    $('.answerChoice4').click(function () {
        userChoice = "answerChoice4"

        $(this).css ('background-color', '#00994d');
        $('.answerChoice1').css ('background-color', 'white');
        $('.answerChoice2').css ('background-color', 'white');
        $('.answerChoice3').css ('background-color', 'white');


    });

});