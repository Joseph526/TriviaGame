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
    var intervalId;
    var i = 0;
    var totalCorrect = 0;
    var totalIncorrect = 0;


    // Declare functions

    // Function to start question timer and call first question
    function startGame() {
        intervalId = setInterval(showQuestion, 3000);
    }
    
    // Display question and answers
    function showQuestion() {
        var printQuestion = $("<div>").text(questions[i].que);
        var printAnsA = $("<div>").text("a: " + questions[i].ans.a);
        var printAnsB = $("<div>").text("b: " + questions[i].ans.b);
        var printAnsC = $("<div>").text("c: " + questions[i].ans.c);
        var printAnsD = $("<div>").text("d: " + questions[i].ans.d);
        $("#quesDiv").html(printQuestion);
        $("#ansDiv1").html(printAnsA);
        $("#ansDiv2").html(printAnsB);
        $("#ansDiv3").html(printAnsC);
        $("#ansDiv4").html(printAnsD);
    }
    
    // Click on correct/incorrect answer


    // Display result to user; increment counter


    // Listen for button click to start game
    $(document).on("click", "#startGame", startGame);
});