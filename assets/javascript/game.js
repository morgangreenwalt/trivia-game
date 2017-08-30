$(document).ready(function() {

    //Variables
    var audio = new Audio("assets/images/space-jam.mp3");
    var timer = 30;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var questions = [{
            question: "Question 1: Who did the Spurs defeat to win the 2014 NBA title?",
            choices: ["Cleavland Cavaliers", "Golden State Warriers", "Miami Heat", "Boston Celtics"],
            answer: "Miami Heat",
            name: "Q1",
        },

        {
            question: "Question 2: What animal is the Spurs mascot?",
            choices: ["Dog", "Bear", "Wolf", "Coyote"],
            answer: "Coyote",
            name: "Q2",
        },

        {
            question: "Question 3: In what year was David Robinson inducted into the Hall of Fame?",
            choices: ["2009", "2008", "2007", "2006"],
            answer: "2009",
            name: "Q3",
        },

        {
            question: "Question 4: What was Tim Duncan's jersey number with the Spurs?",
            choices: ["21", "31", "11", "1"],
            answer: "21",
            name: "Q4",
        },

        {
            question: "Question 5: Who was the Championship MVP for the Spurs during the 2003 season?",
            choices: ["Tim Duncan", "David Robinson", "Tony Parker", "Manu Ginobli"],
            answer: "Tim Duncan",
            name: "Q5",
        }
    ]

    var unanswered = questions.length;

    //Click to begin timer
    function displayQuestions() {
        $(".spurs-logo").on("click", function() {
            $(".intro-copy").hide();
            $(".spurs-logo").hide();
            // run();
            audio.play();

            //List quiz questions
            for (var i = 0; i < questions.length; i++) {
                $(".quiz").append("<ul class='questions'> " + questions[i].question + " </ul>");

                for (var j = 0; j < questions[i].choices.length; j++) {
                    $(".quiz").append("<li class='choices' name='" + questions[i].name + "'value='" + questions[i].choices[j] + "'><input type='text'>" + questions[i].choices[j] + " </li>");
                }
            }

            //Display submit button
            $(".submit").append("<button type='submit' class='btn btn-info'>" + "Submit" + "</button>");
        });
    }

    function selectAnswer() {
        $().on
    }


    //Display submit button
    $(".submit").on("click", function() {
        stop();
        checkAnswers();
    });

    displayQuestions();

    //Function for timer
    // function run() {
    //       intervalId = setInterval(decreaseNum, 1000);
    // }

    //Function for timer cont..    
    function decreaseNum() {
        timer--;
        $(".intro").html("<i class='fa fa-clock-o fa-spin fa-3x fa-fw'></i><span class='sr-only'></span><h1> " + timer + " </h1>");

        //  Once number hits zero...
        if (timer === 0) {
            stop();
            $(".intro").hide();
        }
    }

    //Function to stop game
    function stop() {
        clearInterval(intervalId);
        // $(".intro").hide();
        checkAnswers();
        $(".quiz").addClass("backboard").html("<h2 class='quiz-end'>Time is Up!" + "</h2>");
        $(".answer-display").append("<h2>Here's how you did: " + "</h2>");
        // $(".replay").append("<button class='btn btn-info'>" + "Replay" + "</button>");
        $(".answer-display").addClass("answers").append("<h4>Correct Answers: " + correctAnswers + "</h4>");
        $(".answer-display").addClass("answers").append("<h4>Incorrect Answers: " + incorrectAnswers + "</h4>");
        $(".answer-display").addClass("answers").append("<h4>Unanswered: " + unanswered + "</h4>");
        audio.pause();
        $(".submit").hide();
        $(".intro").hide(timer);

    }

    function checkAnswers() {
        var radios = $("input[type='radio']");
        var answersSelected = radios.filter(":checked").map(function() {
            var answerObject = {}
            var answeredQuestion = $(this).attr("name");
            var answerValue = $(this).val();
            var questionIndex = answeredQuestion.slice(-1) - 1;

            answerObject.questionAnswered = answeredQuestion;
            answerObject.userAnswer = answerValue;
            answerObject.questionIndex = questionIndex;

            return answerObject
        });

        for (var i = 0; i < answersSelected.length; i++) {
            var userGuess = answersSelected[i].userAnswer;
            var masterIndex = answersSelected[i].questionIndex;
            var correctAnswer = questions[0, 1, 2, 3, 4].answer;
            if (userGuess === correctAnswer) {
                correctAnswers++;

            } else {
                incorrectAnswers++;
            }
            //compute unanswered count 
            unanswered = questions.length - answersSelected.length;
        }
    }
    // replay();

    // function replay() {
    // 	$(".replay").on("click", function(){
    // 		displayQuestions();
    // 		run();
    // 		$(".spurs-logo").html("<h1> "+ timer +" </h1>");
    // 		audio.play();
    // 		timer = 30;
    // 		correctAnswers = 0;
    // 		incorrectAnswers = 0;
    // 	});
    // }
});