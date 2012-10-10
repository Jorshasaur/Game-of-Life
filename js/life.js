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
      this.dirty = false;
      this.buildGrid();
    }

    Life.prototype.buildGrid = function() {
      var column, row, _ref, _results;
      this.grid = [];
      _results = [];
      for (column = 0, _ref = this.columns; 0 <= _ref ? column <= _ref : column >= _ref; 0 <= _ref ? column++ : column--) {
        this.grid[column] = [];
        _results.push((function() {
          var _ref2, _results2;
          _results2 = [];
          for (row = 0, _ref2 = this.rows; 0 <= _ref2 ? row <= _ref2 : row >= _ref2; 0 <= _ref2 ? row++ : row--) {
            _results2.push(this.grid[column][row] = 0);
          }
          return _results2;
        }).call(this));
      }
      return _results;
    };

    Life.prototype.run = function() {
      this.newGrid = this.grid;
      return this.runCycle();
    };

    Life.prototype.runCycle = function() {
      var column, currentCell, livingNeighbors, row, _ref, _ref2;
      this.dirty = false;
      for (column = 0, _ref = this.columns; 0 <= _ref ? column <= _ref : column >= _ref; 0 <= _ref ? column++ : column--) {
        for (row = 0, _ref2 = this.rows; 0 <= _ref2 ? row <= _ref2 : row >= _ref2; 0 <= _ref2 ? row++ : row--) {
          livingNeighbors = this.findNeighbors(column, row);
          currentCell = this.grid[column][row];
          if (livingNeighbors < 2 || livingNeighbors > 3) {
            this.newGrid[column][row] = 0;
          } else if (livingNeighbors === 2 || livingNeighbors === 3) {
            this.newGrid[column][row] = currentCell;
          } else if (livingNeighbors === 3 && currentCell === 0) {
            this.newGrid[column][row] = 1;
          }
          if (this.newGrid[column][row] !== currentCell) this.dirty = true;
        }
      }
      this.grid = this.newGrid;
      if (this.dirty === true) return this.runCycle();
    };

    Life.prototype.findNeighbors = function(column, row) {
      var cell, count, endColumn, endRow, startColumn, startRow, _column, _row;
      count = 0;
      startColumn = column - 1;
      startRow = row - 1;
      endColumn = column + 1;
      endRow = row + 1;
      for (_column = startColumn; startColumn <= endColumn ? _column <= endColumn : _column >= endColumn; startColumn <= endColumn ? _column++ : _column--) {
        if (this.grid[_column] != null) {
          for (_row = startRow; startRow <= endRow ? _row <= endRow : _row >= endRow; startRow <= endRow ? _row++ : _row--) {
            if ((column + "," + row) !== (_column + "," + _row)) {
              cell = this.grid[_column][_row];
              if ((cell != null) && cell === 1) count += 1;
            }
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
