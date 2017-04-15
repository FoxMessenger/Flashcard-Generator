// This app will create a series of flashcards in 2 manners.

// ================================
// 			NPM REQUIRES
// ================================

var flashcards = require('./flashcards.js');
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
// var fs = require("fs");

// ================================
// 		   GLOBAL VARIABLES
// ================================
var counter;
var rightAnswers;
var wrongAnswers; 
// If on Mac, this will clear the window
console.reset = function () {
	console.log("");
    console.log("");
    console.log('no worries, maybe next time. Goodbye.')
    console.log("");
    console.log("");
    
    setTimeout(function () {
  		return process.stdout.write('\033c');
	}, 1000);
  	
}

// ================================
// 			INITIAL START
// ================================

var startGame = function(){
	counter = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	startInquirer();
}

// ================================
// 		    INITIAL INQUIRE
// ================================

var startInquirer = function() {	
	inquirer.prompt([
		{
			type: 'list',
			message: "Please choose basic or advanced:",
			choices: ['basic', 'cloze'],
			name: 'choice'
		},
	]).then(function(answer){
		switch(answer.choice) {
			case 'basic':
				// console.log('This is the basic promp!')
				basicChoice();
			break;

			case 'cloze':
				clozeChoice()
				// cloze.prompt('This is the cloze prompt!');
			break;
		}
	})
}

// ================================
// ================================
//    SWITCH CASE: BASIC OPTION
// ================================
// ================================

var basicChoice = function() { 
	// Basic Construct for front (question) and back (answer) of flashcard
	var cardFront = Object.keys(flashcards.basicCard)[counter];
	var cardBack = Object.values(flashcards.basicCard)[counter];

	if (counter < 5) {
		inquirer.prompt([
			{
				name: 'answer',
				type: 'input',
				message: cardFront

				
			}
		]).then(function(result){
			var newFlashcard = new BasicCard(cardFront, cardBack);
			// console.log(newFlashcard);
			// console.log(newFlashcard.front)
			// console.log(cardFront);
			
			if (result.answer.toLowerCase() == newFlashcard.back) {
				console.log('That\'s correct');

				// console.log('The answer was: ' + newFlashcard.back);
				rightAnswers++;
			
			    console.log('right answers: ' + rightAnswers);
			    console.log("");
			    console.log('wrong answers: ' + wrongAnswers);
			

			} else {
				
				console.log('Sorry, that\'s the wrong answer.');
				console.log('The answer was: ' + newFlashcard.back);
				wrongAnswers++;

			    console.log('right answers: ' + rightAnswers);
			    console.log("");
			    console.log('wrong answers: ' + wrongAnswers);
				
			}
			
			counter++;
			basicChoice();
		})		
	} else {
		console.log("===========================\n");
		console.log("");
    	console.log('right answers: ' + rightAnswers);
    	console.log("");
    	console.log('wrong answers: ' + wrongAnswers);
    	console.log("");
		console.log("===========================");
		inquirer.prompt([
			{
				type: 'confirm',
				message: "Want to play again?",
				name: 'confirm',
				default: true				
			}
		]).then(function(choice){
			if (choice.confirm) {
				startGame();

			} else {
				console.reset();
			}
		})
	}
}
// ================================
// ================================
//   SWITCH CASE: 'CLOZE' OPTION
// ================================
// ================================
function clozeChoice() {

	// 	This doesn't work inside the `message` parameter
	// ClozeCard.prototype.partialText = function() {
		// this.text.replace(this.cloze, '...')
	// };
	
	if (counter < flashcards.clozeCard.length) {
		var clozeFront = flashcards.clozeCard[counter].text;
		var clozeBack = flashcards.clozeCard[counter].cloze;
		var clozeFlashcards = new ClozeCard(clozeFront, clozeBack);

		inquirer.prompt([
			{
				name: 'answer',
				type: 'input',
				message: clozeFlashcards.text.replace(clozeFlashcards.cloze, '...')
			}
		]).then(function(result){
			
			if (result.answer.toLowerCase() == clozeBack.toLowerCase()) {
				console.log("");
				console.log('That\'s correct');
				rightAnswers++;
				console.log("");
				console.log('Right Answers: ' + rightAnswers);
				console.log('Wrong Answers: ' + wrongAnswers);

			} else {
				console.log("");
				console.log('Sorry, wrong answer.');
				console.log('CORRECT ANSWER: ' + clozeBack);
				wrongAnswers++;
				console.log("");
				console.log('Right Answers: ' + rightAnswers);
				console.log('Wrong Answers: ' + wrongAnswers);
			}
			counter++;
			clozeChoice();
		});	

  	} else {
  		// this point here will not process because of an unknown undefined to text
		inquirer.prompt([
			{
				type: 'confirm',
				message: "Want to play again?",
				name: 'confirm',
				default: true				
			}
		]).then(function(choice){
			if (choice.confirm) {
				startGame();
				// console.log(counter);

			} else {
				console.reset();
				
			}
		})
	}
};

// Start Program
startGame();

