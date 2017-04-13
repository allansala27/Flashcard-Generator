// required files
var basicCards = require("./basic.js");
var clozeCards = require("./cloze.js");
var viewCards = require("./view.js");


// Inquirer NPM
var inquirer = require('inquirer');

// View Cards or make cards
var viewOrMake = function () {
	inquirer.prompt([
		{
			name: "options",
			message: "Do you want to make cards or view cards? (m/v)"
		}
	]).then(function(response) {
		if (response.options === "m") {
			getCardType();
		}
		if (response.options === "v") {
			viewCards.viewType();
		}
	})	
}

// BasicCard or ClozeCard
var getCardType = function () {
	inquirer.prompt([
		{
			name: "cardType",
			message: "DO you want to make a Basic Card or a Cloze Card? (b/c)"
		}
	]).then(function(answer) {
		if (answer.cardType === "b") {
			basicCards.makeBasicCard();
		}
		if (answer.cardType === "c") {
			clozeCards.makeClozeCard();
		}
 	});
};

viewOrMake();