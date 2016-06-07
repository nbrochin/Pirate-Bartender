  $(document).ready(function(){


  var questions = [[
  { question: "Do ye like yer drinks strong?",
    choices: [' yes', ' no'],
    correctAnswer: 0,
    point_value: 1 

  }, { 
    question: "Do ye like it with a salty tang?",
    choices: [' yes', ' no'],   
    correctAnswer: 0,
    point_value: 1

  }, {
    question: "Are ye a lubber who likes it bitter?",
    choices: [' yes', ' no'],
    correctAnswer: 0,
    point_value: 1

  }, {
    question: "Would ye like a bit of sweetness with yer poison?",
    choices: [' yes', ' no'],
    correctAnswer: 0,
    point_value: 1

  }, {
    question: "Are ye one for a fruity finish?",
    choices: [' yes', ' no'],
    correctAnswer: 0,
    point_value: 1
  },
     
  ],

  ];

 
  var questionSet = questions[0]; // LOADS QUESTIONS
  var questionCounter = 0; // TRACKS QUESTION NUMBER
  var selections = []; // CREATES ARRAY WITH USER CHOICES
  var userPreferences = []; // CREATES ARRAY WITH USER DRINK PREFERENCES
  var choices = questions[0,0].correctAnswer;
  var quiz = $('.drink-orders'); 
  
  var Pantry = function(ingredients) {
    this.ingredients = ingredients;
  };

  var Strong = new Pantry(['glugs of rum', 'slugs of whisky', 'splashes of gin', 'bangs of bourbon', 'smacks of scotch', 'vials of vodka']);
  var Salty = new Pantry(['olive on a stick', 'salt-dusted rim', 'rasher of bacon', 'garlic sprinkled tofu', 'roasted cashew']);
  var Bitter = new Pantry(['shakes of bitters', 'splashes of tonic', 'twists of lemon peel', 'grated orange peels']);
  var Sweet = new Pantry(['sugar cube', 'spoonful of honey', 'splash of cola', 'bucket of chocolate', 'crushed jelly donut']);
  var Fruity = new Pantry(['slices of orange', 'dashes of cassis', 'cherries on top', 'watermelon candy', 'chinese egg toffees']);

  var randStrong = Strong.ingredients[Math.floor(Math.random() * Strong.ingredients.length)];
  var randSalty = Salty.ingredients[Math.floor(Math.random() * Salty.ingredients.length)];
  var randBitter = Bitter.ingredients[Math.floor(Math.random() * Bitter.ingredients.length)];
  var randSweet = Sweet.ingredients[Math.floor(Math.random() * Sweet.ingredients.length)];
  var randFruity = Fruity.ingredients[Math.floor(Math.random() * Fruity.ingredients.length)];
 
console.log(Sweet.ingredients);


  // var Bartender = function(createDrink) {
  //   this.answers = answers;
  // }

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
    var qContainer = $('<div class="drink-orders">', {
      id: 'question-number'
    });
    var currentScore = calculateScore();
    var questionPtvalue = questionSet[index].point_value;
    for (var i = 0; i < questionSet[index].choices.length; i++) {
    $('#question-score.q-score-css').text((questionPtvalue) + 'pts');
    }
    


    // questionSet = questions[0];
    choices = questions[0,0].correctAnswer;
    

    var questionNo = $('<h2>DRINK TYPE ' + 0 + (index + 1) + ':</h2>');
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

         function drinkPreferences() {
              selections[questionCounter] = + $('input[name="answer"]:checked').val();
              var userAnswers = []; 
              var drinkPreferences = new Preferences(userAnswers);
          
         }

  		
  // Displays next question
  function displayNext(index) {
  	 if (index > 0) {
    	if (selections[index-1] === 0 ) {
    	    // if (5*3 === 15) {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#1e6c06');
    }     

	else   {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#66000a');
 	}
 // 	console.log(selections[index-1]);
	// console.log(questionSet[index-1].correctAnswer);
 }

    quiz.fadeOut(function() {
      $('.drink-orders').hide();


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
    var score = $('<div>',{class: 'drink-orders'});
    var calculatedScore = calculateScore();
    currentScore = calculateScore();

   
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

if (questionSet[0].choices[selections[0]] === ' yes') {
      userPreferences = [];
      userPreferences.push('<span style="color: purple;">' +' 2 ' + randStrong + '</span>');
    }

if (questionSet[0].choices[selections[1]] === ' yes') {
      
      userPreferences.push('<span style="color: red;">' +' 1 ' + randSalty + '</span>');
    } 

if (questionSet[0].choices[selections[2]] === ' yes') {
      
      userPreferences.push('<span style="color: blue;">' +' 3 ' + randBitter + '</span>');
    }

if (questionSet[0].choices[selections[3]] === ' yes') {
      
      userPreferences.push('<span style="color: green;">' +' 2 ' + randSweet + '</span>');
    }

if (questionSet[0].choices[selections[4]] === ' yes') {
      

      userPreferences.push('<span style="color: red;">' +' 1 ' + randFruity  + '</span>');

    
  }

var Drinks = function(stuff) {
    this.stuff = stuff;
  };

  var partOne = new Drinks(['Barren', 'Screaming', 'Nuclear', 'Foggy', 'Pungent', 'Lemony', 'Sleepy', 'Jumpy']);
  var partTwo = new Drinks(['Spinnaker', 'Mariner', 'Scuppers', 'Long-Boat', 'Dungeon', 'Gallows', 'Plank', 'Wench']);

  var randDrink1 = partOne.stuff[Math.floor(Math.random() * partOne.stuff.length)];
  var randDrink2 = partTwo.stuff[Math.floor(Math.random() * partTwo.stuff.length)];


    	// result += (i + 1 ) + '. ' + questionSet[i].question + '<br />' + '<em>Your Answer: </em>' + '<span style="color:' + trueTxtcolr + ';">' + questionSet[i].choices[selections[i]]  + '</span><br />' + '<hr>';
      // console.log(questionSet[i].choices[selections[i]]);

    }

  	$('ul.answer-text').html(result);
    	// $('ul.answer-text').html('0' + i + '.' + question01 + '<br />' + 'Your Answer: ' + selections[i] + ' Correct Answer: ' + questionSet[i].correctAnswer + '<br />')


   score.append('<h2>Looks like the ' + '<span style="color: #ff6633;">The ' + randDrink1 + ' ' + randDrink2 + '</span> has your name on it. Here\'s the recipe:<hr></h2><span style="color: blue; font-size: 30px;"> 3 shots of Jamaican rum, ' + userPreferences + '</span>');
  return score;

    }
   
  $('#new-drink').click(function(){
  	startGame();
 });

  function startGame() {
  	event.preventDefault();
			$('.q-score-css').text(" 0pts");
			
			createRadios(0);
			$('.answer-text').hide();
			questionCounter = 0;
			selections = [];
      userPreferences = [''];
			displayNext();
			calculateScore();
			$('ul#question-dots li i').css('color', '#778DA3');

  }




});
