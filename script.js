
function makeSquares(num) {
    const containerDom = document.querySelector('#square-container');
    //clear square grid
    containerDom.textContent = '';
    //temporary place to put all the divs
    let d = document.createDocumentFragment();
    for (let index = 0; index < num*num; index++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = 'white';
        square.innerHTML = "";
        d.appendChild(square);
    }
    containerDom.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
    containerDom.appendChild(d);
    containerDom.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    containerDom.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

function addPixelListeners(squares) {

    squares.forEach((sqr) => {
        
        // hover function
        //TODO: darken instead of black
        //      refactor into function
        sqr.addEventListener('mouseover', () => {
            console.log(sqr.style.backgroundColor);
            sqr.style.backgroundColor = 'black';
            sqr.style.color = 'black';
        });
    });
}

function promptValidation(prompt) {
    if (!prompt) {
        alert("please enter a value");
        return false;
    }
        if (prompt>=100) {
            alert("please enter a value of less than 100");
            return false;
        }

        if (prompt<=0) {
            alert("please enter a non-negative value");
            return false;
        }
    return prompt;
}



makeSquares(5);

let squares = document.querySelectorAll('.square');

addPixelListeners(squares);

const resetButton = document.querySelector('.l');
const sizeButton = document.querySelector('.r');
resetButton.addEventListener('click', () => {
    squares.forEach((sqr) => {
        sqr.style.backgroundColor = 'white';
    });
});


sizeButton.addEventListener('click', () => {
    const amount = promptValidation(prompt("how many rows/columns?"));
    console.log(amount);
    if (amount) {
        makeSquares(amount);
        squares = document.querySelectorAll('.square');
        addPixelListeners(squares);
    }
});
