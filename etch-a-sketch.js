const button = document.createElement('button');
button.textContent = "Set grid size";


const body = document.querySelector('body');
const container = document.querySelector('#container');

body.prepend(button);

gridPainter(16)

button.addEventListener('click', e => {
    console.log(e)
    gridPainter(prompt('Enter a number to set a new grid size'))
})

function gridPainter(gridSize) {
    container.innerHTML = "";
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
}

