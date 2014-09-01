QUnit.module("Unit Tests");
QUnit.test( "Accessors", function( assert ) {
	var validPuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[3, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var row1 = [6, 2, 4, 7, 8, 9, 1, 5, 3];
	var col1 = [6, 5, 3, 7, 2, 4, 1, 8, 9];
	var blk1 = [6, 2, 4, 5, 8, 9, 3, 1, 7];
	var row3 = [3, 1, 7, 2, 4, 5, 8, 6, 9];
	var col5 = [8, 3, 4, 9, 1, 2, 5, 6, 7];
	var blk9 = [9, 7, 6, 5, 4, 1, 2, 3, 8];
	
	assert.deepEqual(getRow(validPuzzle, 1), row1, "Function getRow(puzzle, 1) must return the first row of the given puzzle.");
	assert.deepEqual(getRow(validPuzzle, 3), row3, "Function getRow(puzzle, 3) must return the third row of the given puzzle.");
	assert.deepEqual(getColumn(validPuzzle, 1), col1, "Function getColumn(puzzle, 1) must return the first column of the given puzzle.");
	assert.deepEqual(getColumn(validPuzzle, 5), col5, "Function getColumn(puzzle, 5) must return the fifth column of the given puzzle.");
	assert.deepEqual(getBlock(validPuzzle, 1), blk1, "Function getBlock(puzzle, 1) must return the first block of the given puzzle.");
	assert.deepEqual(getBlock(validPuzzle, 9), blk9, "Function getBlock(puzzle, 9) must return the ninth block of the given puzzle.");
});

QUnit.test( "Utility Functions", function( assert ) {
	var list = [];
	assert.equal(hasDuplicates(list), false, "An empty list cannot have duplicates.");
	list = [1];
	assert.equal(hasDuplicates(list), false, "A one-element list cannot have duplicates.");
	list = [1, 2, 3, 4, 5];
	assert.equal(hasDuplicates(list), false, "A five-element list with no duplicates should return false.");
	list = [4, 2, 3, 4, 5];
	assert.equal(hasDuplicates(list), true, "A list with two or more identical elements should return true.");
	
});

QUnit.test( "Rule Functions", function( assert ) {
	var validPuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[3, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var badRowPuzzle =[	[3, 2, 4, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[6, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var badColPuzzle =[	[4, 2, 6, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[3, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var nonSquarePuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
							[5, 8, 9, 1, 3, 6, 4, 2, 7],
							[3, 1, 7, 2, 4, 5, 8, 6, 9],
							[7, 6, 1, 5, 9, 4, 3, 8, 2],
							[2, 3, 5, 8, 1, 7, 6, 9, 4],
							[4, 9, 8, 6, 2, 3, 7, 1, 5],
							[1, 4, 2, 3, 5, 8, 9, 7, 6],
							[8, 7, 3, 9, 6, 2, 5, 4, 1],
							[9, 5, 6, 4, 7, 1, 2, 3]];
	//Empty elements should not be considered duplicate of each other.
	//This seems counter-intuitive in the solution-checker portion, but will be
	//an important distinction in the puzzle-solver portion of this project
	var blankPuzzle = [	[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ],
						[ , , , , , , , , ]];
	assert.equal(ruleIsNineByNine(validPuzzle), true, "Valid puzzle should pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleIsNineByNine(badRowPuzzle), true, "Puzzle with errors in a row but the correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleIsNineByNine(badColPuzzle), true, "Puzzle with errors in a column but the correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleIsNineByNine(nonSquarePuzzle), false, "A puzzle with incorrect dimensions should fail the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleIsNineByNine(blankPuzzle), true, "A blank puzzle with correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	
	assert.equal(ruleOnlyNumbersOneThroughNine(validPuzzle), true, "");
	assert.equal(ruleOnlyNumbersOneThroughNine(badRowPuzzle), true, "");
	assert.equal(ruleOnlyNumbersOneThroughNine(badColPuzzle), true, "");
	assert.equal(ruleOnlyNumbersOneThroughNine(nonSquarePuzzle), true, "");
	assert.equal(ruleOnlyNumbersOneThroughNine(blankPuzzle), true, "");
	
	assert.equal(ruleRowsHaveOneThroughNine(validPuzzle), true, "");
	assert.equal(ruleRowsHaveOneThroughNine(badRowPuzzle), true, "");
	assert.equal(ruleRowsHaveOneThroughNine(badColPuzzle), true, "");
	assert.equal(ruleRowsHaveOneThroughNine(nonSquarePuzzle), false, "");
	assert.equal(ruleRowsHaveOneThroughNine(blankPuzzle), false, "");
	
	assert.equal(ruleColsHaveOneThroughNine(validPuzzle), true, "");
	assert.equal(ruleColsHaveOneThroughNine(badRowPuzzle), true, "");
	assert.equal(ruleColsHaveOneThroughNine(badColPuzzle), true, "");
	assert.equal(ruleColsHaveOneThroughNine(nonSquarePuzzle), true, "");
	assert.equal(ruleColsHaveOneThroughNine(blankPuzzle), false, "");
	
	assert.equal(ruleNoDuplicatesInRow(validPuzzle), true, "");
	assert.equal(ruleNoDuplicatesInRow(badRowPuzzle), false, "");
	assert.equal(ruleNoDuplicatesInRow(badColPuzzle), true, "");
	assert.equal(ruleNoDuplicatesInRow(nonSquarePuzzle), true, "");
	assert.equal(ruleNoDuplicatesInRow(nonSquarePuzzle), true, "");
	
	assert.equal(ruleNoDuplicatesInColumn(validPuzzle), true, "");
	assert.equal(ruleNoDuplicatesInColumn(badRowPuzzle), true, "");
	assert.equal(ruleNoDuplicatesInColumn(badColPuzzle), false, "");
	assert.equal(ruleNoDuplicatesInColumn(nonSquarePuzzle), true, "");
});

QUnit.module("Integration Tests");
QUnit.test( "Checker test", function( assert ) {
	//this is more of an integration test. Should reorganize to reflect that.
	var rules = []; //rules haven't been defined yet
	var validPuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[3, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var badRowPuzzle =[	[3, 2, 4, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[6, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var badColPuzzle =[	[4, 2, 6, 7, 8, 9, 1, 5, 3],
						[5, 8, 9, 1, 3, 6, 4, 2, 7],
						[3, 1, 7, 2, 4, 5, 8, 6, 9],
						[7, 6, 1, 5, 9, 4, 3, 8, 2],
						[2, 3, 5, 8, 1, 7, 6, 9, 4],
						[4, 9, 8, 6, 2, 3, 7, 1, 5],
						[1, 4, 2, 3, 5, 8, 9, 7, 6],
						[8, 7, 3, 9, 6, 2, 5, 4, 1],
						[9, 5, 6, 4, 7, 1, 2, 3, 8]];
	var nonSquarePuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
							[5, 8, 9, 1, 3, 6, 4, 2, 7],
							[3, 1, 7, 2, 4, 5, 8, 6, 9],
							[7, 6, 1, 5, 9, 4, 3, 8, 2],
							[2, 3, 5, 8, 1, 7, 6, 9, 4],
							[4, 9, 8, 6, 2, 3, 7, 1, 5],
							[1, 4, 2, 3, 5, 8, 9, 7, 6],
							[8, 7, 3, 9, 6, 2, 5, 4, 1],
							[9, 5, 6, 4, 7, 1, 2, 3]];
	assert.equal(checkSolution(validPuzzle, rules), true, "A valid 9x9 puzzle should produce a 'true' result");
	assert.equal(checkSolution(badRowPuzzle, rules), false, "A 9x9 puzzle with errors in a row should produce a 'false' result");
	assert.equal(checkSolution(badColPuzzle, rules), false, "A 9x9 puzzle with errors in a column should produce a 'false' result");
	assert.equal(checkSolution([], rules), false, "Checker should fail when no puzzle is provided.");
	assert.equal(checkSolution(nonSquarePuzzle, rules), false, "A puzzle that is not 9x9 should fail.");
});
