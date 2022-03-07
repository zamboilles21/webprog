const ELEMENTS = [
    'field',
    'block',
    'snakebody',
    'snakehead',
    'apple',
    'goldenapple',
    'greenapple'
],

KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68
},

DIRECTION = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
}


let easyBtn = document.querySelector('#easy'),
mediumBtn = document.querySelector('#medium'),
hardBtn = document.querySelector('#hard'),
extremeBtn = document.querySelector('#extreme'),
startBtn = document.querySelector('#startBtn'),
startPanel = document.querySelector('#startPanel'),
gameBackGround = document.querySelector('#gameBackGround'),
gameTable = document.querySelector('#gameTable'),

table = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
],
snake = [],

difficulty = null,
speed,
obstacle;

startBtn.addEventListener('click', () => {
if (difficulty != null) {
    switch (difficulty) {
        case 'easy':
            { speed = 800;obstacle = 0; break; }
        case 'medium':
            { speed = 650;obstacle = 5; break; }
        case 'hard':
            { speed = 500;obstacle = 10; break; }
        case 'extreme':
            { speed = 300;obstacle = 20; break; }
    }
    switchPanel(1, 2);
    generateTable();
    generateElement(4);
    drawTable();
} else {
    window.alert('Válassz egy nehézségi fokozatot!');
}
});

easyBtn.addEventListener('click', () => {
difficulty = 'easy';
easyBtn.classList.add('selectedBtn');
mediumBtn.classList.remove('selectedBtn');
hardBtn.classList.remove('selectedBtn');
extremeBtn.classList.remove('selectedBtn');
});

mediumBtn.addEventListener('click', () => {
difficulty = 'medium';
easyBtn.classList.remove('selectedBtn');
mediumBtn.classList.add('selectedBtn');
hardBtn.classList.remove('selectedBtn');
extremeBtn.classList.remove('selectedBtn');
});

hardBtn.addEventListener('click', () => {
difficulty = 'hard';
easyBtn.classList.remove('selectedBtn');
mediumBtn.classList.remove('selectedBtn');
hardBtn.classList.add('selectedBtn');
extremeBtn.classList.remove('selectedBtn');
});

extremeBtn.addEventListener('click', () => {
difficulty = 'extreme';
easyBtn.classList.remove('selectedBtn');
mediumBtn.classList.remove('selectedBtn');
hardBtn.classList.remove('selectedBtn');
extremeBtn.classList.add('selectedBtn');
});

function generateTable() {
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        if (i == 0 || i == 19 || j == 0 || j == 19) {
            table[i][j] = 1;
        } else {
            table[i][j] = 0;
        }
    }
}
console.table(table);
}

function generateElement(element) {
let x, y;
do {
    // generálunk egy számot 1 és 18 közt
    x = Math.round(Math.random() * 17 + 1);
    y = Math.round(Math.random() * 17 + 1);
} while (table[x][y] != 0);
table[x][y] = element;
console.log(x, y);
console.table(table);
}
function generateObstacle(){
    for (let i = 0; i < obstacle; i++) {
        generateElement(1);
        
    }
}

function drawTable() {
let str = '<table>';
for (let i = 0; i < 20; i++) {
    str += '<tr>';
    for (let j = 0; j < 20; j++) {
        str += '<td class="' + ELEMENTS[table[i][j]] + '"></td>';
    }
    str += '</tr>';
}
str += '</table>';
gameTable.innerHTML = str;
}

function generateApple() {
generateElement(4);
}
function generateGoldenApple() {
generateElement(4);
    }
function generateGreenApple() {
generateElement(4);
        }

function switchPanel(a, b) {
startPanel.style.zIndex = a;
gameBackGround.style.zIndex = b;
}