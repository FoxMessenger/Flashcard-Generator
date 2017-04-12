// This app will create a series of flashcards in 2 manners.

// import the JS
// var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard');

var inquirer = require('inquirer');
var fs = require("fs");

// var fileRead = function(dataType){
// 	fs.readFile('flashcards.JSON', JSON.stringify(dataType, null, 2), (err) => {
// 		if (err) {
// 			console.log('New Info has been logged!');
// 		} else {
// 			console.log()
// 		}
// 	});	
// }

// var text = new ClozeCard {
// 	'some information'
// }

count = 0;

var askQuestion = function(){
		inquirer.prompt([
			{
				type: 'input',
				message: clozeCard.hulk.partialText(),
				name: 'hulk'
			},
			{
				type: 'input',
				message: 'name of the variable',
				name: 'spiderman'
			},
			{

			}
		]).then(function(answer){
			hulk.text();
		})
	}

askQuestion();



