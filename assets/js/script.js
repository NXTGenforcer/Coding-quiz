var gameEl = $(".game");
var timeEl = $(".timer");
var cardEl = $(".card border-light mb-3");
var currentIndex = 0;

$(document).ready(function () {
  var userScore = 0;
  var questions = [
    {
      questionText:
        "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;",
      answers: ["False", "True"],
      correctAnswer: "True",
    },
    {
      questionText: "JavaScript is a ___ -side programming language.",
      answers: ["Client", "Server", "Both", "ne"],
      correctAnswer: "CLient",
    },
    {
      questionText:
        "Which of the following will write the message “Hello DataFlair!” in an alert box?",
      answers: [
        "alertBox(“Hello DataFlair!”);",
        "alert(Hello DataFlair!);",
        "msgAlert(“Hello DataFlair!”);",
        "alert(“Hello DataFlair!”);",
      ],
      correctAnswer: "alert(“Hello DataFlair!”);",
    },
    {
      questionText: "How do you find the minimum of x and y using JavaScript?",
      answers: ["min(x,y);", "Math.min(x,y)", "Math.min(xy)", "min(xy);"],
      correctAnswer: "Math.min(x,y)",
    },
    {
      questionText: "Which of the following statements will throw an error?",
      answers: [
        "var fun = function bar( ){ }",
        "var fun = function bar{ }",
        " function fun( ){ }",
      ],
      correctAnswer: "var fun = function bar{ }",
    },
    {
      questionText:
        "If the value of x is 40, then what is the output of the following program? (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);",
      answers: [
        "ReferenceError",
        "Divisible by 10",
        "Not divisible by 10",
        "None of the above",
      ],
      correctAnswer: "None of the above",
    },
    {
      questionText:
        "Which JavaScript label catches all the values, except for the ones specified?",
      answers: ["catch", " label", "try", "default"],
      correctAnswer: "default",
    },
    {
      questionText:
        "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
      answers: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
      correctAnswer: "if(x == 2)",
    },
    {
      questionText:
        "Which is the correct JavaScript syntax to change the HTML content given below? <p id=”test”>Hello World!</p>",
      answers: [
        " document.getElementById(“test”).innerHTML = “Hello DataFlair!”;",
        " document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;",
        "document.getElementById(test).innerHTML = “Hello DataFlair!”;",
        "document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;",
      ],
      correctAnswer:
        "document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;",
    },
    {
      questionText: "What will the code return? Boolean(3 < 7)",
      answers: ["true", "false", "NaN", "SyntaxError"],
      correctAnswer: "true",
    },
  ];

  $(".start-button").on("click", function () {
    $(".start-button").remove();
    timer();
    renderQuestion();
    function checkAnswer(event) {
      var userAnswer = event.target.innerText;
      var correctAnswer = questions[currentIndex].correctAnswer;
      if (userAnswer === correctAnswer) {
        userScore++;
      }
      currentIndex++;
      renderQuestion();
    }
    //starting timer
    function timer() {
      var secondsLeft = 60;
      var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.text(secondsLeft);
        if (secondsLeft === 0) {
          clearInterval(timerInterval);
          endGame();
          timeEl.text("");
        }
        if (currentIndex === 10) {
          clearInterval(timerInterval);
          endGame();
          timeEl.text("");
        }
      }, 1000);
    }
    //Appending game, questions, and answers
    function renderQuestion() {
      $(".game").empty();
      $(".card").empty();
      var cardBody = $("<div>");
      var cardTitle = $("<h5>");
      cardBody.addClass("card-body");
      cardTitle.addClass("card-title");
      cardTitle.text(questions[currentIndex].questionText);
      $(".card").append(cardTitle);
      var answersArray = questions[currentIndex].answers;
      for (let j = 0; j < answersArray.length; j++) {
        var currentAnswer = answersArray[j];
        var button = $("<button>");
        button.text(currentAnswer);
        button.on("click", checkAnswer);
        button.addClass("btn btn-light answerBtn");
        cardBody.append(button);
      }
      $(".card").append(cardBody);
    }
  });

  function endGame() {
    gameEl.append(
      $(`
  <h1>Game over!<h1>
  <p>Your score is ${userScore}!
    <form>
    <div class="mb-3">
    <label class="form-label">Initials</label>
    <input class="form-control" placeholder="Your initials">
  </div>
  <button type="submit" class="btn btn-light scoreBtn">Submit</button>
</form>
    `)
    );
  }

  $("body").on("click", ".scoreBtn", function () {
    event.preventDefault();
    var userInitials = $(".form-control").val();
    var highscore = [];
    highscore.push(userInitials + " - " + userScore);
    highscore.sort((a, b) => a - b);
    localStorage.setItem("highscore", JSON.stringify(highscore));
    location.replace("highscores.html");
  });
});
