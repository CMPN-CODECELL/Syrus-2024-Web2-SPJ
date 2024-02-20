// Define the initial Sudoku grid
const initialGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  // Function to render the Sudoku grid
  function renderGrid(grid) {
    const cells = document.querySelectorAll('.cell');
    let index = 0;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        cells[index].textContent = grid[row][col] === 0 ? '' : grid[row][col];
        index++;
      }
    }
  }
  
  // Function to initialize the Sudoku game
  function initializeGame() {
    renderGrid(initialGrid);
  } 
  
  // Call initializeGame when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', initializeGame);
  