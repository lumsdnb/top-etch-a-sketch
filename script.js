const easContainerDom = document.querySelector('#eas-container');
//temporary place to put all the divs
let d = document.createDocumentFragment();
for (let index = 0; index < 16; index++) {
    let square = document.createElement('span');
    square.className = 'square';
    square.innerHTML = "x";
    d.appendChild(square);
}
console.log(d);
easContainerDom.appendChild(d);

const squares = document.querySelectorAll('.square');

// iterate through each div
squares.forEach((sqr) => {

    // and for each one we add a 'click' listener
    sqr.addEventListener('mouseover', () => {
        console.log("i'm hovering!");
        sqr.style.backgroundColor = 'black';
        sqr.style.color = 'black';
    });
});