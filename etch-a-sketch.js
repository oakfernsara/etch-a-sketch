const container = document.querySelector('#container');

const gridSize = 16*16;

for (let x = 0; x < gridSize; x++) {
    const square = document.createElement('div');
    square.className = "grid";
    container.appendChild(square)
}