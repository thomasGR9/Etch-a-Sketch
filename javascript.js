
const container = document.querySelector('#sketchPlace');
let gridWidth ;

const grid = document.createElement('div');
grid.setAttribute("id", "gridClass");
container.appendChild(grid);

function makeGrid(gridWidth) {
    for (let i = 0; i < ((500 / gridWidth) -1) * ((500 / gridWidth) + 1); i++) {
        const grid = document.createElement('div');
        grid.setAttribute("id", "gridClass");
        container.appendChild(grid); 
    }
        const peos = container.querySelectorAll('div');

peos.forEach((div) => {
    div.style.width = gridWidth + "px";
})

peos.forEach((div) => {
    div.style.height = gridWidth + "px";
})}


const tinyButton = document.querySelector('#tiny');
const smallButton = document.querySelector('#small');
const mediumButton = document.querySelector('#medium');
const largeButton = document.querySelector('#large');
const hugeButton = document.querySelector('#huge');

tinyButton.addEventListener('click', () => {
    tinyButton.classList.add('clickedButton');
    smallButton.classList.remove('clickedButton');
    mediumButton.classList.remove('clickedButton');
    largeButton.classList.remove('clickedButton');
    hugeButton.classList.remove('clickedButton');
    gridWidth = 10;
    console.log(gridWidth);
    makeGrid(gridWidth)
    
    
})

smallButton.addEventListener('click', () => {
    smallButton.classList.add('clickedButton');
    tinyButton.classList.remove('clickedButton');
    mediumButton.classList.remove('clickedButton');
    largeButton.classList.remove('clickedButton');
    hugeButton.classList.remove('clickedButton');
    gridWidth = 20;
    console.log(gridWidth);
    makeGrid(gridWidth)

    
})

mediumButton.addEventListener('click', () => {
    mediumButton.classList.add('clickedButton');
    tinyButton.classList.remove('clickedButton');
    smallButton.classList.remove('clickedButton');
    largeButton.classList.remove('clickedButton');
    hugeButton.classList.remove('clickedButton');
    gridWidth = 50;
    console.log(gridWidth);
    makeGrid(gridWidth)
})

largeButton.addEventListener('click', () => {
    largeButton.classList.add('clickedButton');
    tinyButton.classList.remove('clickedButton');
    mediumButton.classList.remove('clickedButton');
    smallButton.classList.remove('clickedButton');
    hugeButton.classList.remove('clickedButton');
    gridWidth = 100;
    console.log(gridWidth);
    makeGrid(gridWidth)
    
})

hugeButton.addEventListener('click', () => {
    hugeButton.classList.add('clickedButton');
    tinyButton.classList.remove('clickedButton');
    mediumButton.classList.remove('clickedButton');
    largeButton.classList.remove('clickedButton');
    smallButton.classList.remove('clickedButton');
    gridWidth = 125;
    console.log(gridWidth);
    makeGrid(gridWidth)
})


/*
let arr = [];
let arr1 = [];

for (let i = 0; i <= 500; i++) {
if (500 % i == 0) {
    arr.push(i);
}}

    
for (let i = 0; i <= 11; i++) {
    arr1.push(Math.abs(arr[i]-gridWidth));
    }

    let arr1Min = Math.min(...arr1);

   

let x;

    for (let i = 0; i <= 11; i++) {
        if (arr1Min == arr1[i]) {
             x = arr[i];
        }  
    }


 if (500 % gridWidth == 0) {
for (let i = 0; i < ((500 / gridWidth) -1) * ((500 / gridWidth) + 1); i++) {
    const grid = document.createElement('div');
    grid.setAttribute("id", "gridClass");
    container.appendChild(grid);
}}

else {
 gridWidth = x;
 for (let i = 0; i < ((500 / gridWidth) -1)* ((500 / gridWidth) + 1); i++) {
    const grid = document.createElement('div');
    grid.setAttribute("id", "gridClass");
    container.appendChild(grid);
}
}
*/





const btns = document.querySelectorAll('button');
const colorButton = document.querySelector('#colorButton');
const rainbowButton = document.querySelector('#rainbowModeButton');
const eraserButton = document.querySelector('#eraserButton');
const clearButton = document.querySelector('#clearButton');



let rainbowColors = ['red', 'orange', 'yellow', 'green', 'violet'];

function rainbowFunction() {
let x = Math.random() * rainbowColors.length;
let y = Math.floor(x);
return rainbowColors[y];
}





    colorButton.addEventListener('click', () => {
        colorButton.classList.add('clickedButton');
        eraserButton.classList.remove('clickedButton');
        rainbowButton.classList.remove('clickedButton');
        const blocks = document.querySelectorAll('#gridClass');
        blocks.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        })
    });



    rainbowButton.addEventListener('click', () => {
        rainbowButton.classList.add('clickedButton');
        eraserButton.classList.remove('clickedButton');
        colorButton.classList.remove('clickedButton');
        const blocks = document.querySelectorAll('#gridClass');
        blocks.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = rainbowFunction();
            }) 
        })
    });



    eraserButton.addEventListener('click', () => {
        eraserButton.classList.add('clickedButton');
        colorButton.classList.remove('clickedButton');
        rainbowButton.classList.remove('clickedButton');
        const blocks = document.querySelectorAll('#gridClass');
        blocks.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white';
            })
        })
    });


    clearButton.addEventListener('click', () => {
        const blocks = document.querySelectorAll('#gridClass');
        blocks.forEach((div) => {
                div.style.backgroundColor = 'white';
            });
        });
    