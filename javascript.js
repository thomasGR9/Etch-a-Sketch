
const container = document.querySelector('#sketchPlace');
let gridWidth = 10;
//gridWidth = prompt("Enter the block's width and height");
let arr = [];
let arr1 = [];

for (let i = 0; i <= 500; i++) {
if (500 % i == 0) {
    arr.push(i);
}
}
    
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
    
    

const grid = document.createElement('div');
grid.setAttribute("id", "gridClass");
container.appendChild(grid);




 if (500 % gridWidth == 0) {
for (let i = 0; i < ((500 / gridWidth) -1)* ((500 / gridWidth) + 1); i++) {
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




const peos = container.querySelectorAll('div');

peos.forEach((div) => {
    div.style.width = gridWidth + "px";
})

peos.forEach((div) => {
    div.style.height = gridWidth + "px";
})

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
        peos.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        })
    });



    rainbowButton.addEventListener('click', () => {
        rainbowButton.classList.add('clickedButton');
        eraserButton.classList.remove('clickedButton');
        colorButton.classList.remove('clickedButton');
        peos.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = rainbowFunction();
            }) 
        })
    });



    eraserButton.addEventListener('click', () => {
        eraserButton.classList.add('clickedButton');
        colorButton.classList.remove('clickedButton');
        rainbowButton.classList.remove('clickedButton');
        peos.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'blue';
            })
        })
    });


    clearButton.addEventListener('click', () => {
        peos.forEach((div) => {
                div.style.backgroundColor = 'blue';
            });
        });
    