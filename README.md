# HW - {Flashcard-Generator}

## Description
- A node application / back end portion of a flashcard application.

## Requirements
- Use of constructors for
	- Basic Cards
	- Cloze Cards


## Technologies Used
- Node.js for texting
- Javascript for functionality

## Code Explaination
- To give myself or the user a better experience, I used the inquirer npm to ask the user what they would like to do with the flashcards.
- The first prompt asks to make or view cards
	- If the user chooses to make cards, a prompt will ask what kind of cards.
		- If the user wants to make basic cards, the prompt will then ask for the back and the front of the card.
			- After the prompt recieves the answers from the user, it will call the basic card constructor and log the card contents in a separate text file.
		- If the user wants to make cloze cards, the prompt will ask for the full text and the partial text of teh card.
			- The responses will be sent to the cloze card constructor and call the its prototypes to log the card components on a separate text file.
	- If the user wants to view cards, it will ask which type of card and print out the appropriate cards.			

