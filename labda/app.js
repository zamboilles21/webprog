let ball = document.querySelector('#ball');
let bat = document.querySelector('#bat');
let ballSize = 54;
let batSize = 122;
let speed = 3;
let screenX;
let screenY;
let ballX;
let ballY;
let dx = 1;
let dy = 1;

getWindowSize();

setBallStartPoz();

setBallSize(ballSize);
setBatSize(batSize);

setInterval(movingBall, 10);

// mozgatjuk a labdát
function movingBall(){
    ballX += dx*speed;
    ballY += dy*speed; 
    
    setBallPoz(ballX, ballY); 

    // ütközés a képernyő szélével
    if ((ballY >= screenY-8) || (ballY <= -8))
    {
        dy *= -1;
    }
    
    if ((ballX >= screenX-8) || (ballX <= -8))
    {
        dx *= -1;
    }
}

// beállítjuk a labda méretét
function setBallSize(size){
    ball.style.width = size+'px';
    ball.style.height = size+'px';
}
function setBatSize(size){
    bat.style.width = size+'px';
    bat.style.height = 15 +'px';
}

// beállítjuk a labda pozícióját
function setBallPoz(x, y){
    ball.style.top = y + 'px';
    ball.style.left = x + 'px'; 
}
function setBatPoz(x, y){
    bat.style.top = screenY-20 + 'px';
    bat.style.left = x + 'px'; 
}

// beállítjuk a labda kezdőpozícióját
function setBallStartPoz(){
    ballX = Math.round(Math.random()*screenX);
    ballY = 0;
    setBallPoz(ballX, ballY); 
}
function setBatStartPoz(){
    batX = Math.round(Math.random()*screenX);
    batY = 0;
    setBallPoz(ballX, ballY); 
}

// lekérdezzük az aktuális képernyő méretet
function getWindowSize(){
    screenX = window.innerWidth-ballSize;
    screenY = window.innerHeight-ballSize; 
}

window.addEventListener('resize',getWindowSize);