const grid = document.querySelector(".grid");

//create the grid
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('lil-square');
    // square.innerText = "Hey ya";
    // square.style.backgroundColor = 'aquamarine';
    // square.style.border = "2px solid black";
    square.style.width = "40px";
    square.style.height = "40px";
    // square.style.boxSizing = "border-box";

    grid.appendChild(square);
}

//color the squares when hovered
let lilSquares = document.querySelectorAll(".lil-square");

lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', () => {
    const hue = Math.floor(Math.random() * 361).toString();
    const saturation = (Math.floor(Math.random() * 56) + 45).toString();
    const lightness = (Math.floor(Math.random() * 76) + 25).toString();
    lilSquare.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}% )`;
    
    // const randomColor = Math.floor(Math.random()*16777215).toString(16); //parameter '16' converts number to hexadecimal string
    // lilSquare.style.backgroundColor = "#" + randomColor;

    // lilSquare.classList.add('hovered');
}))

function colorGrid () {
    let lilSquares = document.querySelectorAll(".lil-square");

    lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', () => {
        const hue = Math.floor(Math.random() * 361).toString();
        const saturation = (Math.floor(Math.random() * 56) + 45).toString();
        const lightness = (Math.floor(Math.random() * 76) + 25).toString();
        lilSquare.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}% )`;
    // lilSquare.classList.add('hovered');
}))
}

//clean the hovering effect
const button = document.querySelector("button");
button.addEventListener('click', () => {
    lilSquares.forEach(lilSquare => lilSquare.classList.remove('hovered'));
    createGrid();
    colorGrid();
});

//change width and the height
function changeSquaresize (e) {
    e.width = ''
}

//make a new grid with a defined size, delete the old grid
function createGrid () {
    let size = prompt("Set the size of a new grid: ");
    let lilSquares = document.querySelectorAll(".lil-square");
    lilSquares.forEach(lilSquare => lilSquare.remove());

    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.classList.add('lil-square');
        let dimensions = 640 / size;
        // console.log(dimensions.toString() + "px")
        square.style.width = dimensions.toString() + "px";
        square.style.height = dimensions.toString() + "px";
        
        grid.appendChild(square);
    }
}