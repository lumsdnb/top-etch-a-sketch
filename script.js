const containerDom = document.querySelector('#eas-container');

function makeSquares(num=32) {
    //clear square grid
    containerDom.textContent = '';
    //temporary place to put all the divs
    let d = document.createDocumentFragment();
    for (let index = 0; index < num; index++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = 'white';
        square.innerHTML = "";
        d.appendChild(square);
    }
    containerDom.style.gridTemplateColumns = `repeat(${ Math.sqrt(num)}, minmax(0px, 1fr))`;
    containerDom.style.gridTemplateRows = `repeat(${Math.sqrt(num)}, minmax(0px,1fr))`;
    containerDom.appendChild(d);
}

makeSquares(3);

const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('.l');
const sizeButton = document.querySelector('.r');
resetButton.addEventListener('click', () => {
    squares.forEach((sqr) => {
        sqr.style.backgroundColor = 'white';
    });
});

sizeButton.addEventListener('click', () => {
    const amount = prompt("how many squares?");
    makeSquares(amount);
});

// iterate through each div
squares.forEach((sqr) => {

    // hover function
    //TODO: darken instead of black
    sqr.addEventListener('mouseover', () => {
        console.log(sqr.style.backgroundColor);
        sqr.style.backgroundColor = 'black';
        sqr.style.color = 'black';
    });
});