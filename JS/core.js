function hasDuplicates(list){
	console.info("Function hasDuplicates called with list:\n" + list.join(", "));
	for(var i = 0; i < list.length; i++){
		for(var j = 0; j < i; j++){
			if(list[i] == list[j]){ return true;}
		}
	}
	return false;
}


function getRow(puzzle, rowNum){
	if(true){//triggering gh-pages build. this will be for error checking later.
	return puzzle[rowNum - 1];
	}
}

function getColumn(puzzle, colNum){
	var column = [];
	for(var i = 0; i < puzzle.length; i++){
		column.push(puzzle[i][colNum - 1]);
	}
	return column;
}

function getBlock(puzzle, blockNum){
	var baseRow = 3 * Math.floor((blockNum - 1)/ 3);
	var baseCol = 3 * ((blockNum - 1) % 3);
	var block = [];
	for(var i = baseRow; i < baseRow + 3; i++){
		for(var j = baseCol; j < baseCol + 3; j++){
			block.push(puzzle[i][j]);
		}
	}
	return block;
}

function isValidDimensions(puzzle){

	if(puzzle.length != 9){ return false;};
	for(var i = 0; i < puzzle.length; i++){
		if(puzzle[i].length != 9){return false;}
	}
	return true;
}

//TODO: Define a function that takes a set of rules and a solved puzzle and applies the rules to the puzzle.
function checkSolution(puzzle, rules){
	
	if(rules != undefined){
		console.warn("The rules argument has not been implemented yet.\nAny rules passed to this function will be ignored.");
	}
	
	if(!isValidDimensions(puzzle)){return false;}
	
	
	for(var i = 1; i < 9; i++){
		if(hasDuplicates(getRow(puzzle, i)) || hasDuplicates(getColumn(puzzle, i)) || hasDuplicates(getBlock(puzzle, i))){
			return false;
		}
	}
	
	console.warn("Not all rules have been implemented. Some invalid puzzles may be incorrectly accepted.");
	return true; //No errors found, assume the solution is correct
}

function isSquare(puzzle){
	var width = puzzle.length;
	if( width == 0 ){return true;}
	for(var i = 0; i < width; i++){
		if(puzzle[i].length != width){ return false;}
	}
	return true;
}

/* BEGIN rule function definitions. */
function ruleIsNineByNine(puzzle){
	if(isSquare(puzzle) && puzzle.length == 9 && puzzle[0].length == 9){
		return true;
	}
	return false;
}

function ruleOnlyNumbersOneThroughNine(puzzle){
	for(var i = 0; i < puzzle.length; i++){
		for(var j = 0; j < puzzle[i].length; j++){
			if (puzzle[i][j] > 9){ return false;}
			if (puzzle[i][j] < 1){ return false;}
		}
	}
	return true;
}
function ruleRowsHaveOneThroughNine(puzzle){
	console.warn("Function ruleRowsHaveOneThroughNine() has not been implemented yet");
	return true;
}

function ruleColsHaveOneThroughNine(puzzle){
	console.warn("Function ruleColsHaveOneThroughNine() has not been implemented yet");
	return true;
}

function ruleNoDuplicatesInRow(puzzle){
	console.warn("Function ruleNoDuplicatesInRow() has not been implemented yet");
	return true;
}

function ruleNoDuplicatesInColumn(puzzle){
	console.warn("Function ruleNoDuplicatesInColumn() has not been implemented yet");
	return true;
}
/* END rule function definitions */
