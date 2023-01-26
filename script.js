const container = document.querySelector('#container');

function makeGrid(gridSize) {
    let boxes = 0;

    while (boxes != gridSize) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        boxes++;
    };
};

const resizer = document.querySelector('#resizer');

resizer.addEventListener('click', () => {
    let size = 0;
    size = prompt("How many squares per side would you like?");
    gridTotal = size * size;
    makeGrid(gridTotal);
    container.style.csstext = 'grid-template-columns: repeat(' + size + ', 1fr)' 
});