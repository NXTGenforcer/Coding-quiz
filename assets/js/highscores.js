$(document).ready(function () {
  var hs = localStorage.getItem("highscore");
  var highscore = JSON.parse(hs);
  $(".score1").append(highscore[0]);
  $(".score2").append(highscore[1]);
  $(".score3").append(highscore[2]);
});
