//TODO: Define a function that takes a set of rules and a solved puzzle and applies the rules to the puzzle.
function checkSolution(puzzle, rules){
	
	if(rules != undefined){
		console.warn("Rules have not been implemented yet. Any rules passed to this function will be ignored.");
	}
	
	//TODO: Check that each row has no duplicates
	var temp;
	for(var i = 0; i < puzzle.length; i++){
		temp = {};
		for(var j = 0; j < puzzle[i].length; j++){
			if(temp[puzzle[i][j]]){ return false; }
		}
	}
	
	console.warn("Not all rules have been implemented. Some invalid puzzles may be incorrectly accepted.");
	return true; //No errors found, assume the solution is correct
}
//TODO: Define a representation of a Sudoku puzzle