// Create a timer, correct, incorrect, and unanswered variables
var timerCount = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var trivia = [
  { question: "What city do the Simpsons live in?", choices: ["Shelbyville", "Springfield", "Chicago", "Capital City"], answer: "Springfield" },
  { question: "What is Bart doing at the beginning of every episode?", choices: ["Riding a bike", "Picking on Lisa", "Writing on a chalkboard", "Pretending to drive a car"], answer: "Writing on a chalkboard" },
  { question: "When was the series premiere of the Simpsons?", choices: ["1989", "1991", "1987", "1998"], answer: "1989" },
  { question: "What is the name of the bar that Bart prank calls?", choices: ["Kwik-E-Mart", "Mr. Burns'", "Moe's", "Flander's"], answer: "Moe's" },
  { question: "How many sisters does Marg have?", choices: ["two", "three", "four", "none"], answer: "two" },
  { question: "What are Marg's sisters names?", choices: ["Thelma & Louise", "Patty & Selma", "Connie, Bonnie & Patty", "Selma, Louise & Bonnie"], answer: "Patty & Selma" },
  { question: "What's the name of the groundskeeper Bart feuds with?", choices: ["Groundskeeper Joe", "Groundskeeper Tom", "Groundskeeper Billie", "Groundskeeper Willie"], answer: "Groundskeeper Willie" },
  { question: "In an episode, which President spanked Bart?", choices: ["Bill Clinton", "George H.W. Bush", "George W. Bush", "Ross Perot"], answer: "George H.W. Bush" },
  { question: "Marg Simpson had many jobs, which of the following is not a job she had?", choices: ["Roller skate waitress", "Ventriloquist", "Assassin", "Bus driver"], answer: "Bus driver" },
  { question: "What is Ned Flanders occupation?", choices: ["Owner of Leftorium", "Bible school teacher", "Priest", "Stay at home dad"], answer: "Owner of Leftorium" },
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