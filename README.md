#Game of Life

http://en.wikipedia.org/wiki/Conway's_Game_of_Life

Demo: http://htmlpreview.github.io/?https://github.com/Jorshasaur/Game-of-Life/blob/master/index.html

####Summary

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overcrowding.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

###Requirements:

The input will be a game board of cells, either alive (1) or dead (0).
The code should take this board and create a new board for the next
generation based on the following rules:

As an example, this game board as input:   
01000   
10011    
11001    
01000    
10001   

Will have a subsequent generation of:   
00000    
10111    
11111    
01000    
00000   
