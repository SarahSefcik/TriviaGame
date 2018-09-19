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

    // Show the Countdown in 1 second increment
    function countdown() {
      setInterval(counter, 1000);
    }

    // Create timesUp Function to Check Accuracy
    function timesUp() {

      // Check Values
      var question1 = $('input:radio[name="Q1"]:checked').val();
      var question2 = $('input:radio[name="Q2"]:checked').val();

      // Add Count to Stats
      if (question1 == undefined) {
        unanswered++;
      }
      else if (question1 == "#correctAnswer") {
        correct++;
      }
      else {
        wrongCount++;
      }

      if (question2 == undefined) {
        unanswered++;
      }
      else if (question2 == "#correctAnswer") {
        correct++;
      }
      else {
        wrongCount++;
      }

      

    }
})