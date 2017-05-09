$(document).ready(function(){

var audio = new Audio("https://youtu.be/qi4UiKgP4ok?t=13s");
var timer = 30;
var intervalId;
var quiz = [{
 		"question": "Question: Who did the Spurs defeat to win the 2014 NBA title?",
      	"choices": ["Cleavland Cavaliers", "Golden State Warriers", "Miami Heat", "Boston Celtics"],
     	"correct": "Miami Heat",
    	}, 

      	{"question": "Question: What animal is the Spurs mascot?",
		"choices": ["Dog", "Bear", "Wolf", "Coyote"],
		"correct": "Coyote",
    	},

    	{"question": "Question: In what year was David Robinson inducted into the Hall of Fame?",
		"choices": ["2009", "2008", "2007", "2006"],
		"correct": "2009",
    	},
    	
    	{"question": "Question: What was Tim Duncan's jersey number with the Spurs?",
		"choices": ["21", "31", "11", "1"],
		"correct": "21",
    	}, 

    	{"question": "Question: Who was the Championship MVP for the Spurs during the 2003 season?",
		"choices": ["Tim Duncan", "David Robinson", "Tony Parker", "Manu Ginobli"],
		"correct": "Tim Duncan",
    	}]

//Click to begin timer
$(".spurs-logo").on("click", function (){
	$("#intro-copy").hide();
	run();
	//audio.play();

	//List quiz questions
	for (var i = 0; i < quiz.length; i++) {
		$(".quiz").append("<ul class='list-group'>" + quiz[i].question +"<li class='list-group-item'>" + quiz[0].choices + "</li>" + "</ul>");
	}
});

function run() {
      intervalId = setInterval(decreaseNum, 1000);
    }
    function decreaseNum() {
      timer--;
      $(".spurs-logo").html("<h1>" + timer + "</h1>");

      //  Once number hits zero...
      if (timer === 0) {
        console.log("Time is up!");
        stop();
      }
	}

	function stop() {
      clearInterval(intervalId);
    }

});    