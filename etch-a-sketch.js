const container = document.querySelector('#container');

const gridSize = 16;

for (let x = 0; x < gridSize; x++) {
    const row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);

    for (let y = 0; y < gridSize; y++) { 
        const box = document.createElement('div');
        box.className = "box";
        box.addEventListener('mouseover', e => {
            box.style.backgroundColor = 'red';
        })

        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = 'white';
        })
        row.appendChild(box);
    }
}