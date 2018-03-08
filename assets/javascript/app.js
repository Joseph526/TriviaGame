$(document).ready(function() {
    
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
        }
    ];
    var intervalId1;
    var intervalId2;
    var timeLimit = 5;
    var i = 0;
    var totalCorrect = 0;
    var totalIncorrect = 0;
    var totalUnanswer = 0;


    // Declare functions

    // Function to start timers and show question
    function startGame() {
        showQuestion();
        // intervalId1 = setInterval(showQuestion, 5000);
        // Display initial value of countdown timer
        $("#timerDiv").html("<h4>Time remaining: " + timeLimit + " seconds</h4>");
        intervalId2 = setInterval(decrement, 1000);
    }
    
    // Function to decrement the countdown timer and display on screen
    function decrement() {
        timeLimit--;
        $("#timerDiv").html("<h4>Time remaining: " + timeLimit + " seconds</h4>");
        if (timeLimit === 0) {
            clearInterval(intervalId2);
            $("#resultDiv").html("<em>You ran out of time!</em>");
            totalUnanswer++;
            i++;
            timeLimit = 5;
            if (i < questions.length) {
                setTimeout(startGame, 5000);    
            }
            // Special case to handle last question
            else if (i === questions.length) {
                setTimeout(displayFinalScore, 5000);
            }
        }
    }
    
    // Display question and answers
    function showQuestion() {
        var printQuestion = $("<div>").text(questions[i].que);
        var printAnsA = $("<div>").text("a: " + questions[i].ans.a).attr("data-ans", "a");
        var printAnsB = $("<div>").text("b: " + questions[i].ans.b).attr("data-ans", "b");
        var printAnsC = $("<div>").text("c: " + questions[i].ans.c).attr("data-ans", "c");
        var printAnsD = $("<div>").text("d: " + questions[i].ans.d).attr("data-ans", "d");
        $("#quesDiv").html(printQuestion);
        $("#ansDiv1").html(printAnsA);
        $("#ansDiv2").html(printAnsB);
        $("#ansDiv3").html(printAnsC);
        $("#ansDiv4").html(printAnsD);
        $("#resultDiv").html("&nbsp");
    }
    
    // Click on answer, evaluate if correct/incorrect
    $(document).on("click", ".answer", evaluateAns);
    function evaluateAns() {
        var ansClicked = $(this).attr("data-ans");
        console.log(ansClicked);
    }

    // Display result to user; increment counter


    // Display final scores at game end
    function displayFinalScore() {
        $("#quesDiv").html("You finished the game!");
        $("#ansDiv1").html("Correct answers: " + totalCorrect);
        $("#ansDiv2").html("Incorrect answers: " + totalIncorrect);
        $("#ansDiv3").html("Unanswered: " + totalUnanswer);
        $("#ansDiv4").html("&nbsp");
        $("#resultDiv").html("&nbsp");
    }

    // Listen for button click to start game
    $(document).on("click", "#startButton", startGame);
});