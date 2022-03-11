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
    results = document.querySelector('#results'),
    game=false;

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
<<<<<<< HEAD
snakeHead={},
=======
snakeHead = {},
>>>>>>> bf2c4da3795a60c328f2352ced6b7b17b6e7e296
difficulty = null,
speed,
direction,
obstacle;

document.addEventListener('keydown', (event) => {
switch (event.keyCode) {
    case KEYS.UP:
        {
            if (direction != 2) {
                direction = 0;
            }
            break;
        }
    case KEYS.DOWN:
        {
            if (direction != 0) {
                direction = 2;
            }
            break;
        }
    case KEYS.LEFT:
        {if (direction != 1) {
            direction = 3;
        }
        break
    }
    case KEYS.RIGHT:
        {
            if (direction != 3) {
                direction = 1;
            }
        }
}
if(!game){
    game=true;
    timer=setInterval(()=>{
        movement();
    },speed);
}
drawTable();
})

function movement(){
    let newsnakeHead=getNewSnakeHeadPos();
    switch (table[newsnakeHead.x][newsnakeHead.y]) {
        case 0:{moveSnake();break;}
        case 1:{gameover();break;}
        case 2:{gameover();break;}
        case 4:{addSnakeBody();generateApple();moveSnake();break;}
        case 5:{addSnakeBody();moveSnake();break;}
        case 6:{removeSnakeBody();moveSnake();break;}
    
        default:
            break;
    }
}
function moveSnake() {
    let last_x=snake[snake.length-1].x;
    let last_y=snake[snake.length-1].y;
    
}
function addSnakeBody() {
    
}
function removeSnakeBody() {
    
}
function gameover() {
    
}
function getNewSnakeHeadPos() {
    let x=snakeHead.x;
    let y=snakeHead.y;
    switch(direction){
        case 0:{y-=2;break;}
        case 1:{x+=2;break;}
        case 2:{y+=2;break;}
        case 3:{x-=2;break;}
    }
    return{x:x,y:y};
}

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
<<<<<<< HEAD
    generateElement(4);
    generateApple();
    generateGreenApple();
    generateGoldenApple();
=======
    generateObstacle();
    generateApple();
    generateSnake();
>>>>>>> bf2c4da3795a60c328f2352ced6b7b17b6e7e296
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
<<<<<<< HEAD
console.log(x, y);
console.table(table);
if (element==3) {
    snakeHead.x=x;
    snakeHead.y=y;
=======

if (element == 3) {
    snakeHead.x = x;
    snakeHead.y = y;
>>>>>>> bf2c4da3795a60c328f2352ced6b7b17b6e7e296
}
}

function generateSnake() {
generateElement(3);
snake.push({ 'x': snakeHead.x, 'y': snakeHead.y });
do {
    direction = Math.round(Math.random() * 3);
    switch (direction) {
        // balra
        case 0:
            {
                if (table[snakeHead.x - 1][snakeHead.y] == 0) {
                    table[snakeHead.x - 1][snakeHead.y] = 2;
                    snake.push({ 'x': snakeHead.x - 1, 'y': snakeHead.y });
                    direction = 2;
                }
                break;
            }
            // lefele
        case 1:
            {
                if (table[snakeHead.x][snakeHead.y + 1] == 0) {
                    table[snakeHead.x][snakeHead.y + 1] = 2;
                    snake.push({ 'x': snakeHead.x, 'y': snakeHead.y + 1 });
                    direction = 3;
                }
                break;
            }
            // jobbra
        case 2:
            {
                if (table[snakeHead.x + 1][snakeHead.y] == 0) {
                    table[snakeHead.x + 1][snakeHead.y] = 2;
                    snake.push({ 'x': snakeHead.x + 1, 'y': snakeHead.y });
                    direction = 0;
                }
                break;
            }

            // felfele
        case 3:
            {
                if (table[snakeHead.x][snakeHead.y - 1] == 0) {
                    table[snakeHead.x][snakeHead.y - 1] = 2;
                    snake.push({ 'x': snakeHead.x, 'y': snakeHead.y - 1 });
                    direction = 1;
                }
                break;
            }
    }
} while (snake.length < 2);

}

function generateObstacle() {
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
results.innerHTML = `Kígyó hossza: ${snake.length}`;
let sh = document.getElementsByClassName('snakehead')[0];
sh.style.transform = 'rotate(' + (direction * 90) + 'deg)';
}
function generatesnake()
{
    generateElement(3)
    snake.push({'x':snakeHead.x,'y':snakeHead.y});
    direction=Math.round(Math.random()*4);
    switch (direction) {
        case 0:{
            if (table[snakeHead.x+1][snakeHead.y]==0) {
                generateElement(2);
                snake.push({'x':snakeHead.x-1,'y':snakeHead.y});
            }
        }
        case 1:{
            if (table[snakeHead.x][snakeHead.y+1]==0) {
                generateElement(2);
                snake.push({'x':snakeHead.x,'y':snakeHead.y});
            }
        }
        case 2:{if (table[snakeHead.x+1][snakeHead.y]==0) {
            generateElement(2);
            snake.push({'x':snakeHead.x-1,'y':snakeHead.y});
        }}
        case 3:{if (table[snakeHead.x][snakeHead.y-1]==0) {
            table[]
            snake.push({'x':snakeHead.x,'y':snakeHead.y-1});
            direction=1;
        }
    break;
    }

            
           
    }
};

function generateApple() {
generateElement(4);
}

function generateGoldenApple() {
generateElement(5);
}

function generateGreenApple() {
generateElement(6);
}

function switchPanel(a, b) {
startPanel.style.zIndex = a;
gameBackGround.style.zIndex = b;
}