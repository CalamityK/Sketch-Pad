const container = document.querySelector('#container');

function makeGrid(gridSize, boxSize) {
    let boxes = 0;

    while (boxes != gridSize) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.style.cssText = 'height: ' + boxSize + '; width: ' + boxSize + ';';
        boxes++;
    };
};

const resizer = document.querySelector('#resizer');

resizer.addEventListener('click', () => {
    let size = 0;
    size = prompt("How many squares per side would you like?");
    let gridTotal = size * size;
        let boxSize = 1000 / size;
    makeGrid(gridTotal, boxSize);
    container.style.cssText = 'grid-template-columns: repeat(' + size + ', ' + boxSize + 'px);';
});