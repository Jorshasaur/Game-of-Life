(function() {
  var JORSH;

  JORSH = window.JORSH || (window.JORSH = {});

  JORSH.Index = (function() {
    var advance_clicked, animateDelay, animateInterval, animate_clicked, build, counter, generateVisualGrid, interval, life, resetGrid, reset_clicked;
    life = {};
    counter = 0;
    interval = {};
    animateDelay = 100;
    resetGrid = function() {
      life = new JORSH.Life();
      life.reset();
      life.buildTestGrid();
      return generateVisualGrid();
    };
    generateVisualGrid = function() {
      var cell, column, content, isAlive, row, _ref, _ref2;
      content = $("<div id=\"grid\" />");
      for (row = _ref = life.rows; _ref <= 0 ? row <= 0 : row >= 0; _ref <= 0 ? row++ : row--) {
        for (column = _ref2 = life.columns; _ref2 <= 0 ? column <= 0 : column >= 0; _ref2 <= 0 ? column++ : column--) {
          isAlive = life.grid[column][row] === 1;
          cell = $("<span />");
          if (isAlive) {
            cell.addClass("alive");
          } else {
            cell.addClass("dead");
          }
          content.prepend(cell);
        }
      }
      return $("#grid_section").html(content);
    };
    build = function() {
      resetGrid();
      $("#reset").on("click", reset_clicked);
      $("#advance").on("click", advance_clicked);
      return $("#animate").on("click", animate_clicked);
    };
    reset_clicked = function() {
      return resetGrid();
    };
    advance_clicked = function() {
      life.runCycle();
      return generateVisualGrid();
    };
    animate_clicked = function() {
      counter = 0;
      clearInterval(interval);
      return interval = setInterval(animateInterval, animateDelay);
    };
    animateInterval = function() {
      counter++;
      advance_clicked();
      if (counter > 13) return clearInterval(interval);
    };
    return {
      init: function() {
        return $(document).ready(build);
      }
    };
  })().init();

}).call(this);
