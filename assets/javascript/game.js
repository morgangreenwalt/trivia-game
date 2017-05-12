$(document).ready(function(){
//Variables
var audio = new Audio("assets/images/space-jam.mp3");
var timer = 30;
var input = $("<input>");
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var userGuess = [];
var quiz = [{
 		"question": "Question 1: Who did the Spurs defeat to win the 2014 NBA title?",
      	"choices": ["Cleavland Cavaliers", "Golden State Warriers", "Miami Heat", "Boston Celtics"],
     	"correct": "Miami Heat",
    	}, 

      	{"question": "Question 2: What animal is the Spurs mascot?",
		"choices": ["Dog", "Bear", "Wolf", "Coyote"],
		"correct": "Coyote",
    	},

    	{"question": "Question 3: In what year was David Robinson inducted into the Hall of Fame?",
		"choices": ["2009", "2008", "2007", "2006"],
		"correct": "2009",
    	},
    	
    	{"question": "Question 4: What was Tim Duncan's jersey number with the Spurs?",
		"choices": ["21", "31", "11", "1"],
		"correct": "21",
    	}, 

    	{"question": "Question 5: Who was the Championship MVP for the Spurs during the 2003 season?",
		"choices": ["Tim Duncan", "David Robinson", "Tony Parker", "Manu Ginobli"],
		"correct": "Tim Duncan",
    	}]

//Click to begin timer
$(".spurs-logo").on("click", function (){
	$("#intro-copy").hide();
	run();
	audio.play();

	//List quiz questions
	for (var i = 0; i < quiz.length; i++) {
		$(".quiz").addClass("questions").append("<ul>" + quiz[i].question + "</ul>");
		$(".quiz").append("<li class='choices'>" + "<input type='radio' name='select' value='choice1'/>" + "&nbsp;" + quiz[i].choices[0] + "</li");
		$(".quiz").append("<li class='choices'>" + "<input type='radio' name='select' value='choice2'/>" + "&nbsp;" + quiz[i].choices[1] + "</li");
		$(".quiz").append("<li class='choices'>" + "<input type='radio' name='select' value='choice3'/>" + "&nbsp;" + quiz[i].choices[2] + "</li");
		$(".quiz").append("<li class='choices'>" + "<input type='radio' name='select' value='choice4'/>" + "&nbsp;" + quiz[i].choices[3] + "</li");

	}
	//Display submit button
	$(".submit").append("<button type='submit' class='btn btn-info'>" + "Submit" + "</button>");
});

$(".submit").on("click", function(){
		stop();
		//guess();
		//checkAnswers();
		$(".answer-display").addClass("answers").append("<h4>" + "Correct Answers: " + correctAnswers + "</h4>");
		$(".answer-display").addClass("answers").append("<h4>" + "Incorrect Answers: " + incorrectAnswers + "</h4>");
});

//Function for timer
function run() {
      intervalId = setInterval(decreaseNum, 1000);
}

//Function for timer cont..    
function decreaseNum() {
	timer--;
	$(".spurs-logo").html("<h1>" + timer + "</h1>");

	//  Once number hits zero...
	if (timer === 0) {
		stop();
	}
}

//Function to stop game
function stop() {
	clearInterval(intervalId);
	$(".quiz").html("<h2 class='quiz-end'>" + "Time is Up!" + "</h2>");
    $(".quiz").append("<h2 class='quiz-end'>" + "Here's how you did: " + "</h2>");
    audio.pause();
    $(".submit").hide();
    $(".spurs-logo").hide(timer);
    //checkAnswers();
}

// function guess() {
// 	if (quiz.elements[i].type === 'radio') {
//           if (form.elements[i].checked === true) {
//                 radioResults += form.elements[i].value + ' ';
//             }
//         }

// }

//Function to check game answers
// function checkAnswers(){
// 	for (var i = 0; i < quiz.length; i++) {
// 		if (quiz[i].choices.input[type=radio].checked === quiz[i].correct) {
// 			correctAnswers++;
// 			$(".answer-display").html("<h4 class='answers'>" + correctAnswers + "</h4>");
// 		}

// 		else {
// 			incorrectAnswers++;
// 			$(".answer-display").append("<div class='answers'>" + incorrectAnswers + "</div>");
// 		}
// 	}
// }

});    