//TODO: Define a function that takes a set of rules and a solved puzzle and applies the rules to the puzzle.
function checkSolution(puzzle, rules){
	
	if(rules != undefined){
		console.warn("The rules argument has not been implemented yet.\nAny rules passed to this function will be ignored.");
	}
	
	//TODO: Check that each row has no duplicates
	var temp;
	for(var i = 0; i < puzzle.length; i++){
		temp = {};
		for(var j = 0; j < puzzle[i].length; j++){
			for(var k = 0; k < j; k++){
				if(puzzle[i][j] == puzzle[i][k]){ return false;}
			}
			
		}
	}
	
	console.warn("Not all rules have been implemented. Some invalid puzzles may be incorrectly accepted.");
	return true; //No errors found, assume the solution is correct
}

function getRow(puzzle, rowNum){
	return puzzle[rowNum - 1];
}

function getColumn(puzzle, colNum){return undefined;}

function getBlock(puzzle, blockNum){return undefined;}
