function primeMagic(){
	var userInput = prompt('You want to find the largest prime factor of what number?','You need a life.');
	var numToTest = 0;
	var bottom = 2;
	factors = [];
	var startTime = new Date().getTime();
	var endTime = 0;
	var executionTime = 0;

	numToTest = userInput;

	while (numToTest > 1){
		while (numToTest % bottom === 0){
			factors.push(bottom);
			numToTest /= bottom;
		}	
		bottom += 1;
	}

	var answer = Math.max.apply(Math, factors);
	endTime = new Date().getTime();
	executionTime = endTime - startTime;
	document.write(userInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " is: " + answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".<br/>");
	document.write("Loop took " + executionTime + " milliseconds to execute.");
}