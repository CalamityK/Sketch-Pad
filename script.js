const container = document.querySelector('#container');

function makeGrid() {
    let boxes = 0;

    while (boxes != 256) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        boxes++;
    };
};

makeGrid();