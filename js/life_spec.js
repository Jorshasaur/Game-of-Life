
  describe("Setup and Reality Check", function() {
    this.game;
    beforeEach(function() {
      return this.game = new JORSH.Life();
    });
    it("should be able to instantiate a new Life game", function() {
      return expect(this.game).not.toBeNull();
    });
    it("should create a default 5 x 5 grid", function() {
      expect(this.game.grid.length).toEqual(5);
      return expect(this.game.grid["0"].length).toEqual(5);
    });
    it("should have a cell with a life of 0 at 0,0", function() {
      return expect(this.game.grid["0"]["0"]).toEqual(0);
    });
    return it("should have a cell with a life of 1 at 3,1 on the test grid", function() {
      this.game.buildTestGrid();
      return expect(this.game.grid["3"]["1"]).toEqual(1);
    });
  });

  describe("Single Cycles against Test Grid", function() {
    this.game;
    beforeEach(function() {
      this.game = new JORSH.Life();
      return this.game.buildTestGrid();
    });
    it("should find 1 neighbor for the cell at 1,0", function() {
      return expect(this.game.findNeighbors(1, 0)).toEqual(1);
    });
    it("should find 3 neighbors for the cell at 0,1", function() {
      return expect(this.game.findNeighbors(0, 1)).toEqual(3);
    });
    it("should find 2 neighbors for the cell at 4,3", function() {
      return expect(this.game.findNeighbors(4, 3)).toEqual(2);
    });
    it("should find 1 neighbors for the cell at 2,4", function() {
      return expect(this.game.findNeighbors(2, 4)).toEqual(1);
    });
    return it("should find 3 neighbors for the cell at 2,2", function() {
      return expect(this.game.findNeighbors(2, 2)).toEqual(3);
    });
  });

  describe("Full Cycles against Test Grid", function() {
    this.game;
    beforeEach(function() {
      this.game = new JORSH.Life();
      this.game.buildTestGrid();
      return this.game.run();
    });
    it("should find cell at 0,1 alive", function() {
      return expect(this.game.grid[0][1]).toEqual(1);
    });
    return it("should find cell at 2,2 alive", function() {
      return expect(this.game.grid[2][2]).toEqual(1);
    });
  });
