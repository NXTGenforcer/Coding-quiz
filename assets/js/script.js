$(document).ready(function () {
  var userScore = 0;
  var questions = [
    {
      questionText: "What color is the sky?",
      answers: ["blue", "green", "red"],
      correctAnswer: "blue",
    },
    {
      questionText: "Do birds fly?",
      answers: ["yes", "no", "maybe", "but pinguins tho"],
      correctAnswer: "yes",
    },
  ];

  $(".start-button").on("click", function () {
    $(".start-button").remove();
    var i = 0;
    $(".game").append(questions[i].questionText);
    var answersArray = questions[i].answers;
    for (let j = 0; j < answersArray.length; j++) {
      var eachAnswer = answersArray[j];
      $(".answers").append(`<button>${eachAnswer}</button>`);
    }
    // Define which is correct and which isnt, make the game advance at the click of an answer, have a butt load of questions, register correct and incorrect answers, then push the number plus an initial to an unordered list on the next html, make it clearable and give a button going back to the game
    // $(".game").append("<p>Hello world!</p>");
  });
});
