describe "Setup and Reality Check", ()->
	@game	

	beforeEach ()->
		@game = new JORSH.Life()

	it "should be able to instantiate a new Life game", ()->
		expect(@game).not.toBeNull()

	it "should create a default 5 x 5 grid", ()->
		expect(@game.grid.length).toEqual(5)
		expect(@game.grid["0"].length).toEqual(5)

	it "should have a cell with a life of 0 at 0,0", ()->
		expect(@game.grid["0"]["0"]).toEqual(0)

	it "should have a cell with a life of 1 at 3,1 on the test grid", ()->
		@game.buildTestGrid()
		expect(@game.grid["3"]["1"]).toEqual(1)

describe "Single Cycle against Test Grid", ()->
	@game	

	beforeEach ()->
		@game = new JORSH.Life()
		@game.buildTestGrid()

	it "should find 1 neighbor for the cell at 1,0", ()->
		expect(@game.findNeighbors 1,0).toEqual(1)

	it "should find 3 neighbors for the cell at 0,1", ()->
		expect(@game.findNeighbors 0,1).toEqual(3)

	it "should find 2 neighbors for the cell at 4,3", ()->
		expect(@game.findNeighbors 4,3).toEqual(2)

	it "should find 1 neighbors for the cell at 2,4", ()->
		expect(@game.findNeighbors 2,4).toEqual(1)

	it "should find 3 neighbors for the cell at 2,2", ()->
		expect(@game.findNeighbors 2,2).toEqual(3)


describe "Full Cycle against Test Grid", ()->
	@game	

	beforeEach ()->
		@game = new JORSH.Life()
		@game.buildTestGrid()
		@game.run()
	
	describe "Row 0", ()->
		it "should find cell at 0,0 dead", ()->
			expect(@game.grid[0][0]).toEqual(0)

		it "should find cell at 1,0 dead", ()->
			expect(@game.grid[1][0]).toEqual(0)

		it "should find cell at 2,0 dead", ()->
			expect(@game.grid[2][0]).toEqual(0)

		it "should find cell at 3,0 dead", ()->
			expect(@game.grid[3][0]).toEqual(0)

		it "should find cell at 4,0 dead", ()->
			expect(@game.grid[4][0]).toEqual(0)

	describe "Row 1", ()->
		it "should find cell at 0,1 alive", ()->
			expect(@game.grid[0][1]).toEqual(1)

		it "should find cell at 1,1 dead", ()->
			expect(@game.grid[1][1]).toEqual(0)

		it "should find cell at 2,1 alive", ()->
			expect(@game.grid[2][1]).toEqual(1)

		it "should find cell at 3,1 alive", ()->
			expect(@game.grid[3][1]).toEqual(1)

		it "should find cell at 4,1 alive", ()->
			expect(@game.grid[4][1]).toEqual(1)

	describe "Row 2", ()->
		it "should find cell at 0,2 alive", ()->
			expect(@game.grid[0][2]).toEqual(1)

		it "should find cell at 1,2 alive", ()->
			expect(@game.grid[1][2]).toEqual(1)

		it "should find cell at 2,2 alive", ()->
			expect(@game.grid[2][2]).toEqual(1)

		it "should find cell at 3,2 alive", ()->
			expect(@game.grid[3][2]).toEqual(1)

		it "should find cell at 4,2 alive", ()->
			expect(@game.grid[4][2]).toEqual(1)

	describe "Row 3", ()->
		it "should find cell at 0,3 dead", ()->
			expect(@game.grid[0][3]).toEqual(0)

		it "should find cell at 1,3 alive", ()->
			expect(@game.grid[1][3]).toEqual(1)

		it "should find cell at 2,3 dead", ()->
			expect(@game.grid[2][3]).toEqual(0)

		it "should find cell at 3,3 dead", ()->
			expect(@game.grid[3][3]).toEqual(0)

		it "should find cell at 4,3 dead", ()->
			expect(@game.grid[4][3]).toEqual(0)

	describe "Row 4", ()->
		it "should find cell at 0,4 dead", ()->
			expect(@game.grid[0][4]).toEqual(0)

		it "should find cell at 1,4 dead", ()->
			expect(@game.grid[1][4]).toEqual(0)

		it "should find cell at 2,4 dead", ()->
			expect(@game.grid[2][4]).toEqual(0)

		it "should find cell at 3,4 dead", ()->
			expect(@game.grid[3][4]).toEqual(0)

		it "should find cell at 4,4 dead", ()->
			expect(@game.grid[4][4]).toEqual(0)			
