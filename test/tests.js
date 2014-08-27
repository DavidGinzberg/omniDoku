QUnit.test( "Checker test", function( assert ) {
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
	assert.equal(checkSolution(validPuzzle, rules), true, "A valid 9x9 puzzle should produce a 'true' result");
	assert.equal(checkSolution(badRowPuzzle, rules), false, "A 9x9 puzzle with errors in a row should produce a 'false' result");
	assert.equal(checkSolution(badColPuzzle, rules), false, "A 9x9 puzzle with errors in a column should produce a 'false' result");
});
