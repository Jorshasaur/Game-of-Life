(function() {
  var JORSH, Life;

  JORSH = window.JORSH || (window.JORSH = {});

  Life = (function() {

    Life.grid;

    function Life(rows, columns) {
      var _ref, _ref2;
      this.rows = rows;
      this.columns = columns;
      if ((_ref = this.rows) == null) this.rows = 4;
      if ((_ref2 = this.columns) == null) this.columns = 4;
      this.grid = this.buildGrid();
    }

    Life.prototype.buildGrid = function() {
      var column, grid, row, _ref, _ref2;
      grid = [];
      for (column = 0, _ref = this.columns; 0 <= _ref ? column <= _ref : column >= _ref; 0 <= _ref ? column++ : column--) {
        grid[column] = [];
        for (row = 0, _ref2 = this.rows; 0 <= _ref2 ? row <= _ref2 : row >= _ref2; 0 <= _ref2 ? row++ : row--) {
          grid[column][row] = 0;
        }
      }
      return grid;
    };

    Life.prototype.run = function() {
      this.newGrid = this.buildGrid();
      return this.runCycle();
    };

    /*
    	I broke runCycle out from run so I could have a method to execute on a timer for 
    	animations.  Run is like a reset, and runCycle just steps through a single generation.
    */

    Life.prototype.runCycle = function() {
      var column, currentCell, livingNeighbors, row, _ref, _ref2;
      for (column = 0, _ref = this.columns; 0 <= _ref ? column <= _ref : column >= _ref; 0 <= _ref ? column++ : column--) {
        for (row = 0, _ref2 = this.rows; 0 <= _ref2 ? row <= _ref2 : row >= _ref2; 0 <= _ref2 ? row++ : row--) {
          livingNeighbors = this.findNeighbors(column, row);
          currentCell = this.grid[column][row];
          /*
          				These conditionals could be optimized a lot, but I like the readability of them currently.
          				It's very easy to follow the rules with the conditionals written this way.
          */
          if (currentCell === 1) {
            if (livingNeighbors < 2) {
              this.newGrid[column][row] = 0;
            } else if (livingNeighbors === 2 || livingNeighbors === 3) {
              this.newGrid[column][row] = 1;
            } else if (livingNeighbors > 3) {
              this.newGrid[column][row] = 0;
            }
          } else if (currentCell === 0) {
            if (livingNeighbors === 3) this.newGrid[column][row] = 1;
          }
        }
      }
      return this.grid = this.newGrid.slice(0);
    };

    Life.prototype.findNeighbors = function(column, row) {
      var cell, count, endColumn, endRow, startColumn, startRow, _column, _row;
      count = 0;
      /* 
      		I start the count at -1 for cells that are alive, so when they calculate themselves the 
      		total isn't distorted.  This could probably be optimized better too.  On larger boards 
      		it would be better to not parse the cell with its neighbors to save unnecessary work.
      */
      if (this.grid[column][row] === 1) count = -1;
      /*
      		The neighbor grid calculations could be optimized into the loops better, but I like 
      		the readability here.
      */
      startColumn = column - 1;
      startRow = row - 1;
      endColumn = column + 1;
      endRow = row + 1;
      for (_column = startColumn; startColumn <= endColumn ? _column <= endColumn : _column >= endColumn; startColumn <= endColumn ? _column++ : _column--) {
        if (this.grid[_column] != null) {
          for (_row = startRow; startRow <= endRow ? _row <= endRow : _row >= endRow; startRow <= endRow ? _row++ : _row--) {
            cell = this.grid[_column][_row];
            if ((cell != null) && cell === 1) count += 1;
          }
        }
      }
      return count;
    };

    Life.prototype.logGrid = function() {
      return console.log(this.grid);
    };

    Life.prototype.logNewGrid = function() {
      return console.log(this.newGrid);
    };

    Life.prototype.buildTestGrid = function() {
      this.grid[0][0] = 0;
      this.grid[0][1] = 1;
      this.grid[0][2] = 1;
      this.grid[0][3] = 0;
      this.grid[0][4] = 1;
      this.grid[1][0] = 1;
      this.grid[1][1] = 0;
      this.grid[1][2] = 1;
      this.grid[1][3] = 1;
      this.grid[1][4] = 0;
      this.grid[2][0] = 0;
      this.grid[2][1] = 0;
      this.grid[2][2] = 0;
      this.grid[2][3] = 0;
      this.grid[2][4] = 0;
      this.grid[3][0] = 0;
      this.grid[3][1] = 1;
      this.grid[3][2] = 0;
      this.grid[3][3] = 0;
      this.grid[3][4] = 0;
      this.grid[4][0] = 0;
      this.grid[4][1] = 1;
      this.grid[4][2] = 1;
      this.grid[4][3] = 0;
      this.grid[4][4] = 1;
      return this.grid;
    };

    return Life;

  })();

  JORSH.Life = Life;

}).call(this);
