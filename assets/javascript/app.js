// Create a timer, correct, incorrect, and unanswered variables
var timerCount = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var trivia = [
  { question: "What's your favorite color?", choices: ["red", "blue", "green", "yellow"], answer: "red" },
  { question: "What's your favorite color?", choices: ["red", "blue", "green", "yellow"], answer: "red" },
];


// Begin Game Function
$(document).ready(function() {

  // Hide the Game and Final Stats
  $("#triviaStartArea").show();
  $("#triviaGameArea").hide();
  $("#triviaStatsArea").hide();

  for (var i = 0; i < trivia.length; i++) {
    var html = "";

    html += "<p>Question " + (i + 1) + ": " + trivia[i].question + "</p>";
    html += "<p><select id='select" + i + "'><option value='unselected'>--</option>";
    html += "<option value='" + trivia[i].choices[0] + "'>" + trivia[i].choices[0] + "</option>";
    html += "<option value='" + trivia[i].choices[1] + "'>" + trivia[i].choices[1] + "</option>";
    html += "<option value='" + trivia[i].choices[2] + "'>" + trivia[i].choices[2] + "</option>";
    html += "<option value='" + trivia[i].choices[3] + "'>" + trivia[i].choices[3] + "</option></select></p>";

    $("#questionArea").append(html);
  }
  
  // Create a Function to Begin the Trivia, Hide the Start Area and Stats Area
  $("#startButton").on("click", function () {
    $("#triviaStartArea").hide();
    $("#triviaGameArea").show();
    $("#triviaStatsArea").hide();
    setInterval(counter, 1000);
  });
  
  $("#doneButton").on("click", function () {
    timesUp();
  });

  // Create a Function for the Display Areas
  function counter() {
    timerCount--;
    $("#timer").html(timerCount + " Seconds");
    
    if (timerCount == 0) {
      timesUp();
    }

  }

    // Create timesUp Function to Check Accuracy
  function timesUp() {
    $("#triviaGameArea").hide();
    $("#triviaStatsArea").show();

      // Check Score
    for (var i = 0; i < trivia.length; i++){
      if (trivia[i].answer == $("#select" + i).val()) {
        correct++;
      }
      else if ("unselected" == $("#select" + i).val()) {
        unanswered++;
      }
      else {
        incorrect++;
      }
    }
  
      
      // Update and Display Score Results
      $("#correctScore").text(correct);
      $("#incorrectScore").text(incorrect);
      $("#unansweredScore").text(unanswered);

  }
  
})