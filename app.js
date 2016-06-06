  $(document).ready(function(){

  // ADD QUESTION SETS HERE

  // FAMOUS INVENTORS 

  var questions = [[
  { question: "Nikola Tesla's greatest contribution to science was which of the following achievements?",
    choices: [' AC induction motor', ' The light bulb with tungsten filament', ' Underground electrical wires', ' The 3-pronged electrical outlet'],
    correctAnswer: 0,
    point_value: 5 }, 

  { question: "Which of the following positions did Benjamin Franklin NOT hold?",
    choices: [" Ambassador to France", " Newpaper editor in Philadelphia", " British postmaster for the colonies", " Inventor of the kite"],
    correctAnswer: 3,
    point_value: 15
  }, {
    question: "What was the first message sent by Samuel Morse's telegraph machine?",
    choices: [" Save our souls", " What hath God wrought?", " Mr. Watson, come here!", " Now is the time for all good men."],
    correctAnswer: 1,
    point_value: 10
  }, {
    question: "This inventor of the Optical Analysis System was also the world's first Hispanic female astronaut. What is her name?",
    choices: [ " Ellen Ochoa", " Sally Ride", " Linda Chavez", " Margaret Kingsley"],
    correctAnswer: 0,
    point_value: 25
  }, {
    question: "Which Dutch inventor introduced the telescope to the world?",
    choices: [" Hans Schopol", " Hans Lippershy", " Johann Bach", " Hans Holbein"],
    correctAnswer: 1,
    point_value: 20
  },
     {
    question: "The Niepce Crater on the Moon was named in recognition of the famous inventor Joseph Niepce. What did Niepce invent?",
    choices: [ " Telescope", " Camera", " Microscope", " Lunar landing module"],
    correctAnswer: 1,
    point_value: 5

   }, {
  	question: "The invention of the refrigerator made a significant improvement to our standard of living. Who is credited with the invention?",
    choices: [" Carl von Linde", " Michael Faraday", " Oliver Evans", " Joseph Beuys"],
    correctAnswer: 2,
    point_value: 25
  }],

    // THE JETSONS 

  [ {
    question: "Meet George Jetson.... His boy ____",
    choices: [' George, Jr.', ' Cosmo', ' Elroy', ' Astro'],
    correctAnswer: 2,
    point_value: 5
  }, {
    question: "What is name of George's boss? ",
    choices: [" Cosmo Spacely", " George Sprocket", " Arturo Spacely", " Elroy Sprocket"],
    correctAnswer: 0,
    point_value: 10
  }, {
    question: "What is the name of the Jetsons' robotic housekeeper?",
    choices: [" Judy", " Roseanne", " Mariana", " Rosie"],
    correctAnswer: 3,
    point_value: 10
  }, {
    question: "What is the name of the annoying family pet?",
    choices: [ " Astro", " Elroy", " Rufus", " Rocket"],
    correctAnswer: 0,
    point_value: 5
  }, {
    question: "What is the name of the daughter, Elroy's sister?",
    choices: [" Jane", " Rosie", " Judy", " Anne"],
    correctAnswer: 2,
    point_value: 10

    }, {
    question: "When she grows up, what does Judy want to be?",
    choices: [ " Scientist", " Pop star", " School teacher", " Housewife"],
    correctAnswer: 1,
    point_value: 5

   }, {
  	question: "George Jetson is gainfully employed by which firm?",
    choices: [" Cosmo's Rockets", " Spacely Sprockets", " Spacely's Rockets", " Astro-Glide"],
    correctAnswer: 1,
    point_value: 10
  }],

  // WORLD CAPITALS

  [ {
    question: "Which of the following is NOT a capital city?",
    choices: [' Jakarta', ' New Delhi', ' Budapest', ' Antwerp'],
    correctAnswer: 3,
    point_value: 15
  }, {
    question: "What is the capital city of Venezuela? ",
    choices: [" Bogota", " Caracas", " Lima", " Buenos Aires"],
    correctAnswer: 1,
    point_value: 10
  }, {
    question: "Which of the following cities is a capital city on the African continent?",
    choices: [" Nairobi", " Algiers", " Cairo", " All of the above"],
    correctAnswer: 3,
    point_value: 10
  }, {
    question: "Djibouti is the capital city of which African nation?",
    choices: [ " Gambia", " Chad", " Djibouti", " Ghana"],
    correctAnswer: 2,
    point_value: 5
  }, {
    question: "Which of the following is the capital of Equatorial Guinea?",
    choices: [" Malabo", " Asmara", " Monrovia", " Lilongwe"],
    correctAnswer: 0,
    point_value: 25

    }, {
    question: "Which of these European capital cities has the largest population? ",
    choices: [ " Lisbon", " Vienna", " Helsinki", " Minsk"],
    correctAnswer: 3,
    point_value: 15

   }, {
  	question: "What is the capital of the Ukraine?",
    choices: [" Budapest", " Kiev", " Tblisi", " Minsk"],
    correctAnswer: 1,
    point_value: 20
  }],

  // NBA SCORING CHAMPS

  [{
    question: "In what year did Pete Maravich win his only scoring title?",
    choices: [' 1976', ' 1978', ' 1977', ' 1975'],
    correctAnswer: 2,
    point_value: 15
  }, {
    question: "Who among these players below won the most NBA scoring titles?",
    choices: [" Kareem-Abdul Jabbar", " Bob McAdoo", " Jerry West", " George Gervin"],
    correctAnswer: 3,
    point_value: 10
  }, {
    question: "Which of the players from the list below never won an NBA scoring title?",
    choices: [" Larry Bird", " Bernard King", " Elvin Hayes", " Alex English"],
    correctAnswer: 0,
    point_value: 10
  }, {
    question: "Which NBA player won scoring titles in both 2000 and 2005?",
    choices: [ " Kobe Bryant", " Shaquille O'Neal", " Alan Iverson", " Tracy McGrady"],
    correctAnswer: 1,
    point_value: 15
  }, {
    question: "Who was the first player to win a second NBA scoring championship?",
    choices: [" George Mikan", " Bob Petit", " Paul Arizin", " Neal Johnston"],
    correctAnswer: 0,
    point_value: 25

    }, {
    question: "Who won the NBA scoring title in 1994? ",
    choices: [ " Michael Jordan", " Hakeem Olajuwon", " David Robinson", " Shaquille O'Neal"],
    correctAnswer: 2,
    point_value: 15

   }, {
  	question: "Wilt Chamberlain owns the five highest point per game totals in the history of the NBA. Who owns the 6th highest?",
    choices: [" Rick Barry", " Kobe Bryant", " Michael Jordan", " Bob McAdoo"],
    correctAnswer: 0,
    point_value: 20
  }]
  ];

 
  var questionSet = questions[0]; // LOADS CORRECT QUIZ
  var questionCounter = 0; // TRACKS QUESTION NUMBER
  var selections = []; // CREATES ARRAY WITH USER CHOICES
  var choices = questions[0,0].correctAnswer;
  var quiz = $('.trivia-questions'); //Q & A AREA
  

  // DISPLAY INITIAL QUESTION - LOADED FROM ARRAYS ABOVE

  displayNext();
  
  $(".visible li.topic-title").click(function() {
  	questionSet = questions[$(this).data("set")];
  	startGame();  	
  })

  // NEXT BUTTON, HANDLER - 
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during question transition
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // ERROR IF NEXT BUTTON IS PUSHED WITHOUT AN ANSWER CHOICE
    
    if (isNaN(selections[questionCounter])) {
      alert('Please choose an answer!');
    } else {
      questionCounter++;
      displayNext(questionCounter);
    }
  });
  

  function calculateScore() {
  	var numCorrect = 0;
    var totalPoints = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questionSet[i].correctAnswer) {
        numCorrect++;
        totalPoints+=questionSet[i].point_value;
    	
      }

    }
    return [numCorrect, totalPoints];

  }


  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestioncontainer(index) {
    var qContainer = $('<div class="trivia-questions">', {
      id: 'question-number'
    });
    var currentScore = calculateScore();
    var questionPtvalue = questionSet[index].point_value;
    for (var i = 0; i < questionSet[index].choices.length; i++) {
    $('#question-score.q-score-css').text((questionPtvalue) + 'pts');
    }
    


    // questionSet = questions[0];
    choices = questions[0,0].correctAnswer;


   
    

    var questionNo = $('<h2>QUESTION ' + 0 + (index + 1) + ':</h2>');
  	$('#question-number.question-01').html(questionNo);
    
    var question = $('<div class="question-text">').append(questionSet[index].question);
    qContainer.append(question);
    $('header ul li.total-score').text(currentScore[1]);

	
    var radioButtons = createRadios(index);
    qContainer.append(radioButtons);
    
    return qContainer;
  }
  

  // places user choice into an array
  function choose() {
    selections[questionCounter] = + $('input[name="answer"]:checked').val();
    
  }
  		
  // Displays next question
  function displayNext(index) {
  	 if (index > 0) {
    	if (selections[index-1] === questionSet[index-1].correctAnswer) {
    	    // if (5*3 === 15) {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#1e6c06');
    }     

	else   {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#66000a');
 	}
 	console.log(selections[index-1]);
	console.log(questionSet[index-1].correctAnswer);
 }

    quiz.fadeOut(function() {
      $('.trivia-questions').hide();


      if(questionCounter < questionSet.length){
        var nextQuestion = createQuestioncontainer(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
          $('ul.answer-text').hide();

        }
        
      }else {
        var scoreDiv = displayScore();
        quiz.append(scoreDiv).fadeIn();
        $('ul.answer-text').show();
        SetHighScores();

        // $('#next').hide();
        // $('#start').show();
      }
    });
  }
  
    // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul class="answer-text">');
    var item;
    var input = '';
    for (var i = 0; i < questionSet[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questionSet[index].choices[i];
      item.append(input);
      radioList.append(item);
      // console.log(questions[index].choices[i]);

    }

    return radioList;

  }

  // Calculates number of correct answers and creates a message to be displayed
  function displayScore(index) {
  	// console.log(questionSet);
    var score = $('<div>',{class: 'trivia-questions'});
    var calculatedScore = calculateScore();
    currentScore = calculateScore();
    $('header ul li.total-score').text(currentScore[1]);

   
    var trueTxtcolr = "";
    var falseTxtcolr = "";
    var result = "";
    for (var i=0; i < questionSet.length; i++) {

    	 if (questionSet[i].choices[questionSet[i].correctAnswer] === questionSet[i].choices[selections[i]]) {
    	trueTxtcolr = '#1E6C06';
    	falseTxtcolr = '#66000A';

    	}

    	else {
    	trueTxtcolr = '#66000A';
}
    	result += (i + 1 ) + '. ' + questionSet[i].question + '<br />' + '<em>Your Answer: </em>' + '<element style="color:' + trueTxtcolr + ';">' + questionSet[i].choices[selections[i]]  + '</element><br />' + '<em>Correct Answer:</em> ' + questionSet[i].choices[questionSet[i].correctAnswer] + '.<br /><hr>';
    	

    }

  	$('ul.answer-text').html(result);
    	// $('ul.answer-text').html('0' + i + '.' + question01 + '<br />' + 'Your Answer: ' + selections[i] + ' Correct Answer: ' + questionSet[i].correctAnswer + '<br />')
    


   score.append('<h2>You\'ve answered ' + calculatedScore[0] + ' questions out of ' +
   questionSet.length + ' correctly. Your total score is ' + calculatedScore[1] + '.</h2></div>');
    return score;
    }
   
  $('#start-game').click(function(){
  	startGame();
 });

  function startGame() {
  	event.preventDefault();
			// $('header ul li.total-score').text("18");
			$('.q-score-css').text(" 0pts");
			// $('header ul li.topic-title').text('JETSONS TRIVIA');
			// $('header ul li.topic-title').css('animation-play-state','paused');
			// createQuestioncontainer();
			createRadios(0);
			$('.answer-text').hide();
			questionCounter = 0;
			selections = [];
			// questionSet = questions[0];
			displayNext();
			calculateScore();
			$('ul#question-dots li i').css('color', '#778DA3');



  }

  /*--- Display information modal box ---*/
 		$("#howToplay").click(function(){
		$("#quiz").css("opacity", "0.2");
		// $("ul.footer-box").hide();
   		$(".overlay").show();

  	});

 		/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(600);
			$(".control-panel").show();
			$("ul.footer-box").show();
			$("#quiz").css("background-color", "");
			$("#quiz").css("opacity", "1.0");


	});
/*--- Set and Maintain High Score List ---*/



function SetHighScores() {
	var myHighScore = $('li.total-score').text();
	var previousHS = (localStorage.HighScore ? localStorage.HighScore : 0)
	if (myHighScore > previousHS) {
		localStorage.setItem('HighScore', myHighScore);
	}
	
	console.log(myHighScore);
}

$('#showHighScore').click(function ShowHighScoreValues() {
var previousHS = (localStorage.HighScore ? localStorage.HighScore : 0)
$('li#high-score-container.high-score').html('HIGH SCORE: ' + previousHS + 'pts');

});

// ShowHighScoreValues();

$('#clearStorage').click(function clearStorage() {
localStorage.clear();
$('li#high-score-container.high-score').html('HIGH SCORE: 00');
})


	// var myScore = calculateScore();
	// parseInt(localStorage.setItem('highScore', '22'));
	// var highScore = parseInt(localStorage.getItem('highScore'));
	// localStorage.getItem('highScore', 'myScore')

			
	// console.log(highScore);
	// console.log(myScore);

	// return [myScore, highScore]
		

  	
});

// CONSTRUCTORS

var Pantry = function(ingredients) {
    this.ingredients = ingredients;
};

var Questions = (["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", 
  "Would ye like a bit of sweetness with yer poison?", "Are ye one for a fruity finish?"]);


var Strong = new Pantry(['Glug of rum', 'slug of whisky', 'splash of gin']);
var Salty = new Pantry(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
var Bitter = new Pantry(['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var Sweet = new Pantry(['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var Fruity = new Pantry(['Slice of orange', 'dash of cassis', 'cherry on top']);

var Bartender = function(createDrink) {
  this.answers = answers;
}

function askQuestion(strong, salty, bitter, sweet, fruity) {
  this.strongPref = strong;
  this.saltyPref = salty;
  this.bitterPref = bitter;
  this.sweetPref = sweet;
  this.fruityPref = fruity;
}





var drinkPreferences = function() {
   
}

var userAnswers = []; 
var userPreferences = new Preferences(userAnswers);
userPreferences.extrastuff = userAnswers[userAnswers.length-1];


console.log(Sweet.ingredients);

// METHODS

// var Musician = function(sounds) {
//     this.sounds = sounds;
// };

// Musician.prototype.solo = function(length) {
//     var solo = "";
//     for (var i=0; i<length; i++) {
//         solo += this.sounds[i % this.sounds.length] + " ";
//     }
//     console.log(solo);
// };

// var david = new Musician(['Twang', 'Thrumb', 'Bling']);
// david.solo(5);


// // INHERITANCE

// var Musician = function(sounds) {
//     this.sounds = sounds;
// };

// Musician.prototype.solo = function(length) {
//     var solo = "";
//     for (var i=0; i<length; i++) {
//         solo += this.sounds[i % this.sounds.length] + " ";
//     }
//     console.log(solo);
// };

// var Guitarist = function() {
//     Musician.call(this, ['Twang', 'Thrumb', 'Bling']);
//     this.strings = 6;
// };
// Guitarist.prototype = Object.create(Musician.prototype);
// Guitarist.prototype.constructor = Guitarist;

// Guitarist.prototype.tune = function() {
//     console.log('Be with you in a moment');
//     console.log('Twoning sproing splang');
// };

// var Bassist = function() {
//     Musician.call(this, ['Boink', 'Bow', 'Boom']);
//     this.strings = 4;
// };
// Bassist.prototype = Object.create(Musician.prototype);
// Bassist.prototype.constructor = Bassist;

// var nigel = new Guitarist();
// nigel.tune();
// nigel.solo(8);

// var derek = new Bassist();
// derek.solo(4);