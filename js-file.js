const grid = document.querySelector(".grid");

//create the grid
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('lil-square');
    // square.classList.add(`${i}`);
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

function randomColor(e) {
    const hue = Math.floor(Math.random() * 361).toString();
    const saturation = (Math.floor(Math.random() * 56) + 45).toString();
    const lightness = (Math.floor(Math.random() * 76) + 25).toString();
    
    // lilSquare.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}%)`;
    // lilSquare.classList.add('hovered');
    e.target.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}%)`;
    console.log(hue, saturation, lightness);
    e.target.classList.add('hovered');
    
    if (e.target.classList.contains('hovered')) {
        removeEvent();
        e.target.classList.remove('hovered')
        e.target.classList.add('1');
    }
    console.log(e.target.style.backgroundColor);
    let regex = /\d{3}|\d{2}|\d{1}/g;
    let found = (e.target.style.backgroundColor).match(regex);
    console.log(found);
    
    let hslColor = rgbToHsl(found[0],found[1],found[2]);

    console.log(hslColor);
    console.log(hslColor[2] - hslColor[2] * 0.1);

    //do something with this part (I need to lower lightening of a hovered square)

    e.target.addEventListener('mouseover', makeItDarker);

    // e.target.addEventListener('mouseover', () => {
    //     if (e.target.classList.contains('1')) {
    //     let found1 = (e.target.style.backgroundColor).match(regex);
    //     let hslColor1 = rgbToHsl(found1[0],found1[1],found1[2]);
    //     e.target.style.backgroundColor = `hsl(${hslColor1[0]},${hslColor1[1]}%,${hslColor1[2] - hslColor1[2] * 0.1}%)`;
    //     // e.target.classList.remove('1');
    //     }
    // })
    
}

function makeItDarker (e) {
    if (e.target.classList.contains('1')) {
        let regex = /\d{3}|\d{2}|\d{1}/g;
        let found1 = (e.target.style.backgroundColor).match(regex);
        let hslColor1 = rgbToHsl(found1[0],found1[1],found1[2]);
        e.target.style.backgroundColor = `hsl(${hslColor1[0]},${hslColor1[1]}%,${hslColor1[2] - hslColor1[2] * 0.1}%)`;
        // e.target.classList.remove('1');
        }
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}



let i = 0;

lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', randomColor));

function removeEvent () {
    let lilSquare = document.querySelector('.hovered');
    lilSquare.removeEventListener('mouseover', randomColor);
}


        // if (lilSquare.classList.contains('hovered')) {
        //      i++;
        //      lilSquare.classList.add(`${i}`);
        // }
        // console.log(i);
        // if (lilSquare.classList.contains(/\d/)) {
        //      lilSquare.removeEventListener('mouseover', randomColor);
        // }


    // const hue = Math.floor(Math.random() * 361).toString();
    // const saturation = (Math.floor(Math.random() * 56) + 45).toString();
    // const lightness = (Math.floor(Math.random() * 76) + 25).toString();
    // lilSquare.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}%)`;

    // const randomColor = Math.floor(Math.random()*16777215).toString(16); //parameter '16' converts number to hexadecimal string
    // lilSquare.style.backgroundColor = "#" + randomColor;

    // lilSquare.classList.add('hovered');

function colorGrid () {
    let lilSquares = document.querySelectorAll(".lil-square");

    lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', randomColor));
    // lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', () => {
    //     const hue = Math.floor(Math.random() * 361).toString();
    //     const saturation = (Math.floor(Math.random() * 56) + 45).toString();
    //     const lightness = (Math.floor(Math.random() * 76) + 25).toString();
    //     lilSquare.style.backgroundColor =`hsl(${hue},${saturation}%,${lightness}%)`;
     // lilSquare.classList.add('hovered');
// }))
    // lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', () => {
    //     lilSquare.style.backgroundColor = `hsl`
    // })
}

//clean the hovering effect
const button = document.querySelector("button");
button.addEventListener('click', () => {
    lilSquares.forEach(lilSquare => lilSquare.removeEventListener('mouseover', makeItDarker));
    // lilSquares.forEach(lilSquare => lilSquare.removeEventListener('mouseover', randomColor));
    lilSquares.forEach(lilSquare => lilSquare.classList.remove('1'));

    // lilSquares.forEach(lilSquare => lilSquare.addEventListener('mouseover', randomColor));
    createGrid();
    colorGrid();
});

//change width and the height
function changeSquaresize (e) {
    e.width = ''
}

//make a new grid with a defined size, delete the old grid
function createGrid () {
    let size = prompt("Set the size of a new grid (0-100): ");
    if (size > 100) {
        alert("The number is too big!")
        size = prompt("Set the size of a new grid (0-100): ")
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