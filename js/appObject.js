// Define our constructor functions
var Pantry = function (drinks) {
  this.drinks = drinks;
}

var customer = function () {
  this.preferences = {};
  this.addPreference = function (taste, choice) {
    this.preferences[taste] = choice;

  }
};

var pirateBartender = function () {
  this.styles = [
    "Strong",
    "Salty",
    "Bitter",
    "Sweet",
    "Fruity"
  ];

  this.askQuestion = function () {
    var question = "";
    for (var i = 0; i < this.styles.length; i++) {
      question += "<label> " + this.styles[i] + "<input type='checkbox' name='tastes' value='" + this.styles[i] + "'>";
    }

    return question;
    console.log(styles);

  };

  this.createDrink = function (preferences, pantry) {
    // Contains the logic for finding drinks based on preferences
    return pantry.drinks[1];
  };
  this.serveDrink = function() {};

}


// Create instances of each object
var me = new customer();
var bartender = new pirateBartender();
var pantry = new Pantry(['glugs of rum', 'slugs of whisky', 'splashes of gin', 'bangs of bourbon', 'smacks of scotch', 'vials of vodka']);


// UI Actions
$('#question').html(bartender.askQuestion());
$('input[type=radio]').click(function () {
  me.addPreference($(this).val(), true);
});
$('#orderDrink').click(function() {
  $('#yourOrder').html(bartender.createDrink(me.preferences, pantry));
});


