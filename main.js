/*************
 * SELECTORS *
 *************/

const questionArea = document.getElementById("question-area");
const askQuestion = document.getElementById("answer");
//const submitButton = document.getElementById("submit");

/******************
 * EVENT score *
 ******************/
let score = 0;

// Check local storage for a previous score
const storedScore = localStorage.getItem('score');
if (storedScore !== null) {
    score = parseInt(storedScore);   
}

// Add one to score
//score++;

// Store the new score
localStorage.setItem('score', score);

// Display score on the DOM
document.querySelector('h3').innerText = `YOUR SCORE: ${score}`;

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

function buildListOfQuestion(value) {
	QsOfValue = [];
	for (question of QUESTIONS) {
		if (question.value === value) {
			QsOfValue.push(question);
		}
	}
	return QsOfValue;
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

for (const rawButton of jqueryButtons) {
	// Get the jQuery version of each button
	const button = $(rawButton);

	// Add a click listener to each button
	button.click(function () {
		value = button.text();
		buildListOfQuestion(value);
		getRandomInt(QsOfValue.length);
		selectedQuestionObj = QsOfValue[randomNum];
		console.log("Q of Value: ", selectedQuestionObj);
		askQuestion.innerText = `${selectedQuestionObj.question}`;
	});
}

const submitButton = $("#submit");
//const playerAnswer = $("#playerAnswer")
submitButton.click(function () {
    playerAnswer = document.getElementById('playerAnswer').value
	console.log("click");
	currentQuestion = []
	for (question of QUESTIONS) {
        if (question.question == askQuestion.innerText) {
            currentQuestion.push(question);
		}
	}
    console.log("Current Q Obj: ", currentQuestion);
    console.log("Player Answer: ", playerAnswer)

    if (playerAnswer === currentQuestion[0].answer){
        console.log("Answer Correct");
        score += currentQuestion[0].value
        console.log(score)
    } else {
        console.log("Keep trying")
    }
});

//next steps..
//on click... loop through all questions to fine the one with the current question
//compare input answer to answer in question obj
