// This app will create a series of flashcards in 2 manners.

// NPM require 
var basicCard = require('./basicCard');
var inquirer = require('inquirer');
var fs = require("fs");

// variables for switch cases
var count = 0;
var rightAnswers = 0;
var wrongAnswer = 0;

var startGame = function(){
		inquirer.prompt([
			{
				type: 'list',
				message: "Please choose basic or advanced:",
				choices: ['basic', 'advanced'],
				name: 'choice'
			},
		]).then(function(answer){
			switch(answer.choice) {
				case 'basic':
					console.log('This is the basic promp!')
					// basicChoice.prompt();
				break;

				case 'advanced':
					console.log('This is the cloze prompt!')
					// cloze.prompt();
				break;
			}
		})
	}

// ========
// SWITCH: BASIC
// ========

var basicChoice = {
	prompt: function(){
		inquirer.prompt([
			{
				type: 'input',
				message: clozeCard.hulk(),
				name: 'question'
			}
		]).then(function(answer){
			if (answer === clozeCard.cloze) {
				console.log('Good job!')
			} else {
				console.log('Sorry, that\'s the wrong answer.')
			}
		})
	}

}


var basicQuestions = function(){
	for (var hulk in basicCard) {
	console.log("a " + key + " band is " + music[key] + ".");	
}
}
// ========
// SWITCH: ADVANCED
// ========

function addQuestions(id, front, back) {
	this.id = id;
	this.front = front;
	this.back = back;

	this.flashcards = [];
}

// Start Program
startGame();



