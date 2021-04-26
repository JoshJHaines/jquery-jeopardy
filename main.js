/*************
 * SELECTORS *
 *************/

const questionArea = document.getElementById("question-area");
const askQuestion = document.getElementById("answer");

/******************
 * EVENT LISTENER *
 ******************/

/********************
 * HELPER FUNCTIONS *
 ********************/

function testSelection() {
	console.log("You are selecting the element correctly");
}

function testClick() {
	console.log("The button was clicked");
}

function getRandomInt(max) {
	randomNum = Math.floor(Math.random() * max);
	return randomNum;
}

/******************************************
 * CREATING A GRID OF ELEMENTS ON THE DOM *
 ******************************************/

const container = $("#question-area");

const NUM_COLS = 5;
const DOLLAR_AMOUNTS = ["$100", "$200", "$400", "$600", "$800"];

// Loop through each column...
for (let i = 0; i < NUM_COLS; i++) {
	// Create a new column
	const column = $('<div class="column"></div>');

	// Loop through each dollar amount..
	for (const dollarAmount of DOLLAR_AMOUNTS) {
		// Create a new item
		const item = $(`<div class="item">${dollarAmount}</div>`);

		// Add item to column
		column.append(item);
	}

	// Add column to container
	container.append(column);
}

/****************************************************
 * ADDING CLICK LISTENERS TO EACH ITEM USING JQUERY *
 ****************************************************/

// Get all buttons
const jqueryButtons = $(".item");

// Loop through the bututons
for (const rawButton of jqueryButtons) {
	// Get the jQuery version of each button
	const button = $(rawButton);

	// Add a click listener to each button
	button.click(function () {
		// Finally, log the buttons text
		console.log(button.text());
		console.log("Num of Qs: ", QUESTIONS.length);

		QsMatchValue = 0;
		for (question of QUESTIONS) {
			if (question.value === button.text()) {
				QsMatchValue++;
			}
		}
		console.log("Num of Value Qs:", QsMatchValue);

		QsOfValue = [];
		for (question of QUESTIONS) {
			if (question.value === button.text()) {
				QsOfValue.push(question);
			}
		}
		getRandomInt(QsOfValue.length);
		console.log("Q of Value: ", QsOfValue[randomNum].question);
		//askQuestion.innerText = `${QsOfValue[randomNum].question`
	});
}
