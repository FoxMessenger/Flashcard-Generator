// This app will create a series of flashcards in 2 manners.

// NPM require 
var flashcards = require('./flashcards.js');
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
// var fs = require("fs");

var counter;
var rightAnswers;
var wrongAnswers; 

// ================================
//
// ================================

var startGame = function(){
	counter = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	startInquirer();
}

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
				console.log('This is the cloze prompt!')
				// cloze.prompt();
			break;
		}
	})
}
// ================================
// ================================
//      SWITCH: BASIC OPTION
// ================================
// ================================

var basicChoice = function() { 
	// Basic Construct
	var cardFront = Object.keys(flashcards.basicCard)[counter];

	var cardBack = Object.values(flashcards.basicCard)[counter];

	if (counter < 4) {
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
				console.log('The answer was: ' + newFlashcard.back);
				rightAnswers++;

			} else {
			
				console.log('Sorry, that\'s the wrong answer.');
				console.log('your answer was: ' + result + '. The answer was: ' + newFlashcard.back);
				wrongAnswers++;
			}
			
			// console.log('right answers: ' + rightAnswers);
			// console.log('wrong answers: ' + wrongAnswers);
			counter++;
			basicChoice();
			
		})		
	} else {
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
				console.log("");
			    console.log("");
			    console.log('not worries, maybe next time.')
			    console.log("");
			    console.log("");
				
			}
		})
	}
}
// ================================
// ================================
// SWITCH: 'CLOZE' OPTION
// ================================
// ================================
function listAdvanced() {
	
	for (var key in clozeQuestions) {
		for (i = 0; i < 4; i++)
  		console.log(clozeQuestions[i].front);
  		
  	}
};

// Start Program
startGame();

