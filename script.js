//The div that contains the cards
const gameContainer = document.getElementById('game');

const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];

let count = 0;
let selections = [];
let targets = [];
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}

// TODO: Implement this function!
function handleCardClick(event) {
	// you can use event.target to see which element was clicked
	// console.log('you just clicked', event.target);
	setColor = event.target.className;
	if (count < 2 && event.target.style.backgroundColor === '') {
		event.target.style.backgroundColor = setColor;
		targets.push(event.target);
		selections.push(setColor);
		count++;
		console.log(`count is ${count}`);
		console.log(`the selected spaces are ${selections}`);
		console.log(`the targets are ${targets}`);
		if (count === 2) {
			setTimeout(function() {
				if (selections[0] !== selections[1]) {
					for (target of targets) {
						target.style.backgroundColor = '';
					}
				}
				targets = [];
				selections = [];
				console.log('selections cleared');
			}, 1000);
			count = 0;
		}
	}
}

// when the DOM loads
createDivsForColors(shuffledColors);
