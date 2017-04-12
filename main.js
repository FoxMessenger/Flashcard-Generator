// This app will create a series of flashcards in 2 manners.

// import the JS
// var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard');
var replace = require('./replace')

var firstPresident = new clozeCard('was the first president of the United States?', 'George Washington ');

// "Who was the first president of the United States?"
firstPresident.clozeDelete(); 

var replaceQuestion1 = new replace(firstPresident.text) 
console.log(replaceQuestion1);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 


// var inquirer = require('inquirer');

