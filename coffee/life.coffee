JORSH = window.JORSH or= {}

class Life
	@grid	

	constructor: (@rows, @columns)->
		@rows ?= 4
		@columns ?= 4
		@grid = @buildGrid()

	buildGrid: ()->
		grid = []
		for column in [0..@columns]
			grid[column] = []
			for row in [0..@rows]
				grid[column][row] = 0
		return grid

	run: ()->
		@newGrid = @buildGrid()
		@runCycle()
	
	###
	I broke runCycle out from run so I could have a method to execute on a timer for 
	animations.  Run is like a reset, and runCycle just steps through a single generation.
	###
	runCycle: ()->
		for column in [0..@columns]
			for row in [0..@rows]
				livingNeighbors = @findNeighbors column, row
				currentCell = @grid[column][row]
				###
				These conditionals could be optimized a lot, but I like the readability of them currently.
				It's very easy to follow the rules with the conditionals written this way.
				###
				if currentCell == 1
					if livingNeighbors < 2
						@newGrid[column][row] = 0
					else if livingNeighbors == 2 or livingNeighbors == 3
						@newGrid[column][row] = 1
					else if livingNeighbors > 3
						@newGrid[column][row] = 0
				else if currentCell == 0
					if livingNeighbors == 3
						@newGrid[column][row] = 1	

		@grid = @newGrid.slice 0
				
	findNeighbors: (column, row)->
		count = 0
		### 
		I start the count at -1 for cells that are alive, so when they calculate themselves the 
		total isn't distorted.  This could probably be optimized better too.  On larger boards 
		it would be better to not parse the cell with its neighbors to save unnecessary work.
		###
		if @grid[column][row] == 1 then count = -1
		###
		The neighbor grid calculations could be optimized into the loops better, but I like 
		the readability here.
		###
		startColumn = column - 1
		startRow = row - 1
		endColumn = column + 1
		endRow = row + 1
		for _column in [startColumn .. endColumn]
			if @grid[_column]?
				for _row in [startRow .. endRow]
					cell = @grid[_column][_row]
					if cell? and cell is 1 
						count += 1

		return count

	logGrid: ()->
		console.log @grid

	logNewGrid: ()->
		console.log @newGrid

	buildTestGrid: ()->
		@grid[0][0] = 0
		@grid[0][1] = 1  
		@grid[0][2] = 1
		@grid[0][3] = 0
		@grid[0][4] = 1

		@grid[1][0] = 1
		@grid[1][1] = 0  
		@grid[1][2] = 1
		@grid[1][3] = 1
		@grid[1][4] = 0

		@grid[2][0] = 0
		@grid[2][1] = 0  
		@grid[2][2] = 0
		@grid[2][3] = 0
		@grid[2][4] = 0

		@grid[3][0] = 0
		@grid[3][1] = 1  
		@grid[3][2] = 0
		@grid[3][3] = 0
		@grid[3][4] = 0

		@grid[4][0] = 0
		@grid[4][1] = 1  
		@grid[4][2] = 1
		@grid[4][3] = 0
		@grid[4][4] = 1

		return @grid


JORSH.Life = Life
