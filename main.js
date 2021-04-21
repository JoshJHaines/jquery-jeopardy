/*************
 * SELECTORS *
 *************/

const questionArea = document.getElementById("question-area");
const testButton = document.getElementById("test-button");

/******************
 * EVENT LISTENER *
 ******************/

questionArea.addEventListener("click", testSelection);
testButton.addEventListener("click", testClick);

/********************
 * HELPER FUNCTIONS *
 ********************/

function testSelection() {
	console.log("You are selecting the element correctly");
}

function testClick(){
    console.log("The button was clicked")
}
