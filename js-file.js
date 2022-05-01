const grid = document.querySelector(".grid");

//create the grid
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('lil-square');
    square.style.width = "40px";
    square.style.height = "40px";

    grid.appendChild(square);
}

//color the squares when hovered
let lilSquares = document.querySelectorAll(".lil-square");
lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', randomColor));

function randomColor(e) {
    //put a random color on each square when hovered
    const hue = Math.floor(Math.random() * 361).toString();
    const saturation = (Math.floor(Math.random() * 56) + 45).toString();
    const lightness = (Math.floor(Math.random() * 76) + 25).toString();
    
    e.target.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}%)`;
    e.target.classList.add('hovered');
    
    //keep the same color on a square
    if (e.target.classList.contains('hovered')) {
        removeHoverEvent();
        e.target.classList.remove('hovered')
        e.target.classList.add('1');
    }

    //make a square darker when hovered again
    e.target.addEventListener('mouseover', makeItDarker);
    
}

//make the color 10% darker with every hover
function makeItDarker (e) {
    if (e.target.classList.contains('1')) {
        let regex = /\d{3}|\d{2}|\d{1}/g;
        let found1 = (e.target.style.backgroundColor).match(regex);
        let hslColor1 = rgbToHsl(found1[0],found1[1],found1[2]);
        e.target.style.backgroundColor = `hsl(${hslColor1[0]},${hslColor1[1]}%,${hslColor1[2] - hslColor1[2] * 0.1}%)`;
        }
}

//convert RGB color to HSL
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}

//prevent to color a square again
function removeHoverEvent () {
    let lilSquare = document.querySelector('.hovered');
    lilSquare.removeEventListener('mouseover', randomColor);
}

//color the grid after reseting the size
function colorGrid () {
    let lilSquares = document.querySelectorAll(".lil-square");
    lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', randomColor));
}

//reset and clean the grid
const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener('click', () => {
    lilSquares.forEach(lilSquare => lilSquare.removeEventListener('mouseover', makeItDarker));
    lilSquares.forEach(lilSquare => lilSquare.classList.remove('1'));

    createGrid();
    colorGrid();
});

//clean the current grid
const buttonClean = document.querySelector(".clean");
buttonClean.addEventListener('click', () => {
    let lilSquares = document.querySelectorAll(".lil-square");
    lilSquares.forEach(lilSquare => lilSquare.classList.remove('1'));
    lilSquares.forEach(lilSquare => lilSquare.style.backgroundColor = 'aquamarine');
    colorGrid();
})

//make a new grid with a defined size, delete the old grid
function createGrid () {
    let size = prompt("Set the size of a new grid (1-100): ");
    if (size > 100 || size < 0) {
        alert("The size is icorrect!\nPlease use the numbers between 1 and 100");
        size = prompt("Set the size of a new grid (1-100): ");
    }
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