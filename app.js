function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.deletedText = function () {

}

ClozeCard.prototype.partialText = function () {

} 

ClozeCard.prototype.fullText = function () {

}

// Inquirer NPM
var inquirer = require('inquirer');
var numCards;

var getNumCards = function () {
	inquirer.prompt([
		{
			name: "numCards",
			message: "How many flashcards do you want to make?"
		}
	]).then(function(numFlashcards) {
		numCards = numFlashcards;
		console.log (numCards);
	});
}
	
getNumCards();