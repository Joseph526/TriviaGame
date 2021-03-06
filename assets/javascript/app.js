$(document).ready(function () {

    // Declare global variables
    var questions = [
        {
            que: "In which year was Leonardo da Vinci born?",
            ans: {
                a: "1567",
                b: "1452",
                c: "1499",
                d: "1525"
            },
            correctAns: "b"
        },
        {
            que: "Who painted the ceiling of the Sistine Chapel?",
            ans: {
                a: "Picasso",
                b: "Renoir",
                c: "Michelangelo",
                d: "Donatello"
            },
            correctAns: "c"
        },
        {
            que: "Where did Impressionism originate?",
            ans: {
                a: "France",
                b: "United States",
                c: "Italy",
                d: "Spain"
            },
            correctAns: "a"
        },
        {
            que: "Which museum is the home of the Mona Lisa?",
            ans: {
                a: "Metropolitan Museum of Art",
                b: "British Museum",
                c: "Philadelphia Museum of Art",
                d: "Louvre"
            },
            correctAns: "d"
        },
        {
            que: "Who was a famous American painter?",
            ans: {
                a: "Paul Cezanne",
                b: "Andrew Wyeth",
                c: "Rembrandt",
                d: "Vincent van Gogh"
            },
            correctAns: "b"
        }
    ];
    var intervalId1;
    var timeLimit;
    var i = 0;
    var totalCorrect = 0;
    var totalIncorrect = 0;
    var totalUnanswer = 0;


    // Declare functions

    // Function to start timer and show question
    function startGame() {
        timeLimit = 20;
        showQuestion();
        // Display initial value of countdown timer
        $("#timerDiv").html("<h4>Time remaining: " + timeLimit + " seconds</h4>");
        intervalId1 = setInterval(decrement, 1000);
    }

    // Function to decrement the countdown timer and display on screen
    function decrement() {
        timeLimit--;
        $("#timerDiv").html("<h4>Time remaining: " + timeLimit + " seconds</h4>");
        if (timeLimit === 0) {
            clearInterval(intervalId1);
            $("#resultDiv").html("<em>You ran out of time!</em>");
            totalUnanswer++;
            i++;
            nextQuestion();
        }
    }

    // Function to move to next question, including special case for last question
    function nextQuestion() {
        if (i < questions.length) {
            setTimeout(startGame, 5000);
        }
        // Special case to handle last question
        else if (i === questions.length) {
            setTimeout(displayFinalScore, 5000);
        }
    }

    // Function to display question and answers
    function showQuestion() {
        var printQuestion = $("<div>").text(questions[i].que);
        var printAnsA = $("<div>").text("(a) " + questions[i].ans.a).addClass("answer").attr("data-ans", "a");
        var printAnsB = $("<div>").text("(b) " + questions[i].ans.b).addClass("answer").attr("data-ans", "b");
        var printAnsC = $("<div>").text("(c) " + questions[i].ans.c).addClass("answer").attr("data-ans", "c");
        var printAnsD = $("<div>").text("(d) " + questions[i].ans.d).addClass("answer").attr("data-ans", "d");
        $("#quesDiv").html(printQuestion);
        $("#ansDiv1").html(printAnsA);
        $("#ansDiv2").html(printAnsB);
        $("#ansDiv3").html(printAnsC);
        $("#ansDiv4").html(printAnsD);
        $("#resultDiv").html("&nbsp");
    }

    // Listen for click on answer, evaluate if correct/incorrect
    $(document).on("click", ".answer", evaluateAns);
    function evaluateAns() {
        var ansClicked = $(this).attr("data-ans");
        $("#ansDiv1").html("&nbsp");
        $("#ansDiv2").html("&nbsp");
        $("#ansDiv3").html("You chose: " + $(this).text());
        $("#ansDiv4").html("&nbsp");
        if (ansClicked === questions[i].correctAns) {
            displayCorrect();
        }
        else {
            displayIncorrect();
        }
    }

    // Functions to display correct/incorrect result to user; increment counter
    function displayCorrect() {
        clearInterval(intervalId1);
        $("#resultDiv").html("<em>Correct!</em>");
        totalCorrect++;
        i++;
        nextQuestion();
    }

    function displayIncorrect() {
        clearInterval(intervalId1);
        $("#resultDiv").html("<em>Incorrect!</em>");
        totalIncorrect++;
        i++;
        nextQuestion();
    }

    // Function to display final scores at game end
    function displayFinalScore() {
        $("#quesDiv").html("You finished the game!");
        $("#ansDiv1").html("Correct answers: " + totalCorrect);
        $("#ansDiv2").html("Incorrect answers: " + totalIncorrect);
        $("#ansDiv3").html("Unanswered: " + totalUnanswer);
        $("#ansDiv4").html("&nbsp");
        var resetButton = $("<button>");
        resetButton.text("Play Again").attr("id", "callResetGame")
        $("#resultDiv").html(resetButton);
    }

    // Listen for button click to reset game
    $(document).on("click", "#callResetGame", resetGame);

    // Function to reset game
    function resetGame() {
        i = 0;
        totalCorrect = 0;
        totalIncorrect = 0;
        totalUnanswer = 0;
        startGame();
    }

    // Listen for button click to start game
    $(document).on("click", "#startButton", startGame);
});