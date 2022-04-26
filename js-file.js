const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('lil-square');
    square.style.backgroundColor = 'aquamarine';
    square.style.border = "2px solid black";
    square.style.width = "75px";
    square.style.height = "75px";
    square.innerText = "Hey ya";
    square.style.boxSizing = "border-box";

    grid.appendChild(square);
}