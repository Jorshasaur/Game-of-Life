JORSH = window.JORSH or= {}

class Life
	@grid	

	constructor: (@rows, @columns)->
		@rows ?= 4
		@columns ?= 4
		@dirty = false
		@buildGrid()

	buildGrid: ()->
		@grid = []
		for column in [0..@columns]
			@grid[column] = []
			for row in [0..@rows]
				@grid[column][row] = 0
	run: ()->
		@newGrid = @grid
		@runCycle();

	runCycle: ()->
		@dirty = false;
		for column in [0..@columns]
			for row in [0..@rows]
				livingNeighbors = @findNeighbors column, row
				currentCell = @grid[column][row]
				if currentCell == 1 and livingNeighbors == 2 or livingNeighbors == 3
					@newGrid[column][row] = 1
				else if currentCell == 0 and livingNeighbors == 3
					@newGrid[column][row] = 1
				else
					@newGrid[column][row] = 0

				if @newGrid[column][row] != currentCell
					@dirty = true

		@grid = @newGrid
		
		if @dirty == true
			@runCycle();
				
	findNeighbors: (column, row)->
		count = 0
		startColumn = column - 1
		startRow = row - 1
		endColumn = column + 1
		endRow = row + 1
		for _column in [startColumn .. endColumn]
			if @grid[_column]?
				for _row in [startRow .. endRow]
					if (column + "," + row) != (_column + "," + _row)
						cell = @grid[_column][_row]
						#console.log _column, _row, cell
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
