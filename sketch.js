const grid = document.querySelector('.grid-container')
let squares = document.querySelectorAll('.square');


function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flexGrow = '1';
        grid.appendChild(row);
        
        for (let j = 0; j < num; j++) {
            const square = document.createElement('div');
            square.style.backgroundColor = 'white';
            square.style.border = '1px solid black';
            square.style.flexGrow = '1';
            square.classList.add('square');
            row.appendChild(square);
        }
    }

    squares = document.querySelectorAll('.square');
    hover();

}

function deleteGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}

// initialize a 16*16 grid
createGrid(16);


// size-selecter

const sizeInput = document.getElementById('selectsize');
sizeInput.addEventListener('change', ()=> {
    const value = sizeInput.value;
    const sizelabel = document.querySelector('#sizelabel');
    sizelabel.textContent = value;
    deleteGrid();
    createGrid(value);
});



// hovering effect

function hover() {
    squares.forEach(sqr => sqr.addEventListener('mouseover', () => {
        sqr.style.backgroundColor = 'black';
    }));
}



// clear button

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    squares.forEach(sqr => {sqr.style.backgroundColor = 'white';});
});


