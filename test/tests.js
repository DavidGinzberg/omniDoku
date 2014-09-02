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

QUnit.module("Unit Tests: Rule Functions", {
		//define properties used by all tests in this module
		setup:	function(){
			this.validPuzzle = [	[6, 2, 4, 7, 8, 9, 1, 5, 3],
									[5, 8, 9, 1, 3, 6, 4, 2, 7],
									[3, 1, 7, 2, 4, 5, 8, 6, 9],
									[7, 6, 1, 5, 9, 4, 3, 8, 2],
									[2, 3, 5, 8, 1, 7, 6, 9, 4],
									[4, 9, 8, 6, 2, 3, 7, 1, 5],
									[1, 4, 2, 3, 5, 8, 9, 7, 6],
									[8, 7, 3, 9, 6, 2, 5, 4, 1],
									[9, 5, 6, 4, 7, 1, 2, 3, 8]];

			this.badRowPuzzle =[	[3, 2, 4, 7, 8, 9, 1, 5, 3],
									[5, 8, 9, 1, 3, 6, 4, 2, 7],
									[6, 1, 7, 2, 4, 5, 8, 6, 9],
									[7, 6, 1, 5, 9, 4, 3, 8, 2],
									[2, 3, 5, 8, 1, 7, 6, 9, 4],
									[4, 9, 8, 6, 2, 3, 7, 1, 5],
									[1, 4, 2, 3, 5, 8, 9, 7, 6],
									[8, 7, 3, 9, 6, 2, 5, 4, 1],
									[9, 5, 6, 4, 7, 1, 2, 3, 8]];

			this.badColPuzzle =[	[4, 2, 6, 7, 8, 9, 1, 5, 3],
									[5, 8, 9, 1, 3, 6, 4, 2, 7],
									[3, 1, 7, 2, 4, 5, 8, 6, 9],
									[7, 6, 1, 5, 9, 4, 3, 8, 2],
									[2, 3, 5, 8, 1, 7, 6, 9, 4],
									[4, 9, 8, 6, 2, 3, 7, 1, 5],
									[1, 4, 2, 3, 5, 8, 9, 7, 6],
									[8, 7, 3, 9, 6, 2, 5, 4, 1],
									[9, 5, 6, 4, 7, 1, 2, 3, 8]];

			this.nonSquarePuzzle =[	[6, 2, 4, 7, 8, 9, 1, 5, 3],
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
			//TODO: Change the puzzle representation from an Array to something else. the 
			//  trailing comma behavior in JS makes this confusing (notice there are 9 ,'s)
			this.blankPuzzle = [	[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,],
									[ , , , , , , , , ,]];
			
			this.tinyPuzzleValidNumbers = [ [1, 2],[3,4]];
			//"OOB" stands for "Out Of Bounds" ... Just FYI :D
			this.tinyOOBPuzzle = [ [1, 2], [3, 42]];
			this.tinyPuzzleWithZero = [ [0, 1], [2, 3]];
			this.noPuzzle = [];
		},
		teardown:	function(){
		
		}
	});
QUnit.test( "Rule: Puzzle is 9x9", function( assert ) {
	var ruleUnderTest = ruleIsNineByNine;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "Valid puzzle should pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleUnderTest(this.badRowPuzzle), true, "Puzzle with errors in a row but the correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleUnderTest(this.badColPuzzle), true, "Puzzle with errors in a column but the correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleUnderTest(this.blankPuzzle), true, "A blank puzzle with correct dimensions should still pass the \"Puzzle must be 9x9\" rule");
	
	assert.equal(ruleUnderTest(this.nonSquarePuzzle), false, "A puzzle with incorrect dimensions should fail the \"Puzzle must be 9x9\" rule");
	assert.equal(ruleUnderTest(this.tinyPuzzleValidNumbers), false, "A 4x4 puzzle will not pass the \"Puzzle must be 9x9\" rule.");
	assert.equal(ruleUnderTest(this.tinyOOBPuzzle), false, "A 4x4 puzzle will not pass the \"Puzzle must be 9x9\" rule.");
	assert.equal(ruleUnderTest(this.tinyPuzzleWithZero), false, "A 4x4 puzzle will not pass the \"Puzzle must be 9x9\" rule.");
	assert.equal(ruleUnderTest(this.noPuzzle), false, "Undefined puzzles should fail to pass the \"Puzzle must be 9x9\" rule.");
});
	
	QUnit.test( "Rule: Puzzle Contains only numbers 1-9", function( assert ) {
	
	var ruleUnderTest = ruleOnlyNumbersOneThroughNine;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "A valid 9x9 puzzle with all correct numbers should pass this rule.");
	assert.equal(ruleUnderTest(this.badRowPuzzle), true, "Puzzles with duplicate valid numbers in a row should still pass this rule");
	assert.equal(ruleUnderTest(this.badColPuzzle), true, "Puzzles with duplicate valid numbers in a column should still pass this rule.");
	assert.equal(ruleUnderTest(this.blankPuzzle), true, "Blank puzzles, by definition, do not contain any out-of-bounds numbers. Should pass this rule.");
	assert.equal(ruleUnderTest(this.nonSquarePuzzle), true, "A non-square puzzle without any OOB numbers should still pass this rule.");
	
	assert.equal(ruleUnderTest(this.tinyPuzzleValidNumbers), true, "Puzzles with only numbers between 1 and 9 (inclusive) should pass this rule.");
	assert.equal(ruleUnderTest(this.tinyOOBPuzzle), false, "Puzzles with numbers greater than 9 should fail this rule");
	assert.equal(ruleUnderTest(this.tinyPuzzleWithZero), false, "Puzzles with numbers less than 1 should fail this rule");
	assert.equal(ruleUnderTest(this.noPuzzle), true, "Undefined puzzles do not contain any OOB numbers/characters. Pass.");
});
	
	QUnit.test( "Rule: Puzzle rows all have numbers 1-9", function( assert ) {
	var ruleUnderTest = ruleRowsHaveOneThroughNine;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "A valid puzzle should have all numbers 1-9 in every row.");
	assert.equal(ruleUnderTest(this.badRowPuzzle), false, "A puzzle with incorrect rows missing at least one number in [1-9] should fail.");
	assert.equal(ruleUnderTest(this.badColPuzzle), true, "A puzzle with incorrect columns but rows that still contain all numbers in [1-9] should pass");
	assert.equal(ruleUnderTest(this.blankPuzzle), false, "Blank rows, by definition, lack the numbers 1-9. This puzzle does not pass the rule.");

	assert.equal(ruleUnderTest(this.nonSquarePuzzle), false, "A 9x9 puzzle missing at least one cell can't possibly have all 9 numbers in every row. Should fail.");
	assert.equal(ruleUnderTest(this.noPuzzle), false, "Undefined puzzles lack all numbers 1-9. Fail."); //Is this right? the numbers are missing...but so are the rows and columns...
});
	
	QUnit.test( "Rule: Puzzle columns all have numbers 1-9", function( assert ) {
	var ruleUnderTest = ruleColsHaveOneThroughNine;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "Valid puzzles should have all numbers 1-9 in every column.");
	assert.equal(ruleUnderTest(this.badRowPuzzle), true, "A puzzle with incorrect rows but columns that still contain all numbers in [1-9] should pass");
	assert.equal(ruleUnderTest(this.badColPuzzle), true, "A puzzle with incorrect columns missing at least one number in [1-9] should fail.");
	assert.equal(ruleUnderTest(this.blankPuzzle), false, "Blank columns, by definition, lack the numbers 1-9. This puzzle does not pass the rule");

	assert.equal(ruleUnderTest(this.nonSquarePuzzle), false, "A 9x9 puzzle missing at least one cell can't possibly have all 9 numbers in every column. Should fail.");
	assert.equal(ruleUnderTest(this.noPuzzle), false, "Undefined puzzles lack all numbers 1-9. Fail."); //Is this right? the numbers are missing...but so are the rows and columns...
});
	
	QUnit.test( "Rule: Puzzle rows do not contain duplicate numbers", function( assert ) {
	var ruleUnderTest = ruleNoDuplicatesInRow;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "Valid puzzles should have no duplicates in rows or columns and should pass both rules.");
	assert.equal(ruleUnderTest(this.badRowPuzzle), false, "A row containing one or more duplicate numbers violates this rule.");
	assert.equal(ruleUnderTest(this.badColPuzzle), true, "A puzzle with mistakes in columns but no duplicates in any row should pass this rule.");
	assert.equal(ruleUnderTest(this.blankPuzzle), true, "Blank cells do not count toward duplicates. pass");

	assert.equal(ruleUnderTest(this.nonSquarePuzzle), true, "Misshapen puzzles with no duplicates in a row still pass this rule.");
	assert.equal(ruleUnderTest(this.noPuzzle), true, "Undefined puzzles lack numbers, and thus duplicates. Pass.");
});
	
	QUnit.test( "Rule: Puzzle columns do not contain duplicate numbers", function( assert ) {
	var ruleUnderTest = ruleNoDuplicatesInColumn;
	
	//Well-formed puzzle grids:
	assert.equal(ruleUnderTest(this.validPuzzle), true, "Valid puzzles should have no duplicates in rows or columns and should pass both rules.");
	assert.equal(ruleUnderTest(this.badRowPuzzle), true, "A puzzle with mistakes in rows but no duplicates in any column should pass this rule.");
	assert.equal(ruleUnderTest(this.badColPuzzle), false, "A column containing one or more duplicate numbers violates this rule.");
	assert.equal(ruleUnderTest(this.blankPuzzle), true, "Blank cells do not count toward duplicates. Pass");

	assert.equal(ruleUnderTest(this.nonSquarePuzzle), true, "Misshapen puzzles with no duplicates in a column still pass this rule.");
	assert.equal(ruleUnderTest(this.noPuzzle), true, "Undefined puzzles lack numbers, and thus duplicates. Pass");
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
