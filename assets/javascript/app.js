// Create a timer, correct, incorrect, and unanswered variables
var timerCount = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Begin Game Function
$(document).ready(function() {

  // Hide the Game and Final Stats
  $("#triviaStartArea").hide();
  $("#triviaGameArea").hide();
  $("#triviaStatsArea").hide();

  // Create a Function to Begin the Trivia, Hide the Start Area and Stats Area
  ($"#startButton").on("click", function() {
    $("#triviaStartArea").hide();
    $("#triviaGameArea").show();
    $("#triviaStatsArea").hide();
    return;
  }
  
    // Create a Function for the Display Areas
    function counter() {
      timerCount--;
      $("#timer").html(timerCount + " Seconds");
      $("#doneButton").on("click", function() {
        ("#triviaGameArea").hide();
        timesUp();
        ("#triviaStatsArea").show();
        return;
      });

      if (count == -1) {
        timesUp();
        ("#triviaGameArea").hide();
        ("#triviaStatsArea").show();
      }

    }

})