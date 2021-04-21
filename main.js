/***********
 * ON LOAD *
 ***********/

addQuestionButtons();
addQuestionButtonEventListeners();

/*************
 * SELECTORS *
 *************/

const questionArea = document.getElementById("question-area");

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

function addQuestionButtons() {
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
			// Create a new button
			const valueButton = $(
				`<button class="value-select">${dollarAmount}</button>`
			);

			// Add item to column
			column.append(valueButton);
		}

		// Add column to container
		container.append(column);
	}
}

function addQuestionButtonEventListeners() {
	/****************************************************
	 * ADDING CLICK LISTENERS TO EACH ITEM USING JQUERY *
	 ****************************************************/

	// Get all buttons
	const jqueryButtons = $(".value-select");

	// Loop through the bututons
	for (const rawButton of jqueryButtons) {
		// Get the jQuery version of each button
		const button = $(rawButton);

		// Add a click listener to each button
		button.click(function () {
			// Finally, log the buttons text
			console.log(button.text());
		});
	}
}
