let ball = document.querySelector('#ball');
let bat = document.querySelector('#bat');
let pointsLbl = document.querySelector('#pointsLbl');
let speedLbl=document.querySelector('#speedLbl');
let gift = document.querySelector('#gift');
let ballSize = 54;
let batSize = 120;
let speed = 3;
let screenX;
let screenY;
let ballX;
let ballY;
let batX;
let batY;
let giftx;
let gifty;
let dx = 1;
let dy = 1;
let points=0;

getWindowSize();
setBallStartPoz();
setBatStartPoz()
setBallSize(ballSize);
setBatSize(batSize);
updateResults();
setGiftStartPoz();

let game = setInterval(movingBall, 10);

// mozgatjuk a labdát
function movingBall(){
    ballX += dx*speed;
    ballY += dy*speed; 
    
    setBallPoz(ballX, ballY); 

    // ütközés a képernyő szélével
    if (ballY <= -8)
    {
        dy *= -1;
       
    }
    
    if ((ballX >= screenX-8) || (ballX <= -8))
    {
        dx *= -1;
    }

    // ha a labda eléri az ütő vonalát, megnézzük, hogy alatta van-e az ütő
    if (ballY >= batY){
        let ballMid = ballX + (ballSize) / 2;

        if ((ballMid >= batX) && (ballMid <= (batX+batSize)))
        {
            dy *= -1;
            points++;
            if(points==10){
                speed++;
            }
            updateResults();
        }
    }

    // ha a labda leesett
    if (ballY >= screenY-8)
    {
        clearInterval(game);
        window.alert('GAME OVER!');
    }
}

// beállítjuk a labda méretét
function setBallSize(size){
    ball.style.width = size+'px';
    ball.style.height = size+'px';
}

// beállítjuk az ütő méretét
function setBatSize(size){
    bat.style.width = size+'px';
    bat.style.height = '15px';
}

// beállítjuk a labda pozícióját
function setBallPoz(x, y){
    ball.style.top = y + 'px';
    ball.style.left = x + 'px'; 
}

// beállítjuk az ütő pozícióját
function setBatPoz(x){
    bat.style.top = batY + 'px';
    bat.style.left = x + 'px'; 
}
function setGiftPoz(x){
    gift.style.top = y + 'px';
    gift.style.left = x + 'px'; 
}

// beállítjuk a labda kezdőpozícióját
function setBallStartPoz(){
    ballX = Math.round(Math.random()*screenX);
    ballY = 0;
    setBallPoz(ballX, ballY); 
}
function setGiftStartPoz(){
    giftx = Math.round(Math.random()*screenX);
    gifty = 0;
    setGiftPoz(giftx, gifty); 
}

// beállítjuk az ütő kezdőpozícióját
function setBatStartPoz(){
    batX = 0;
    batY = screenY-40;
    setBatPoz(batX); 
}

// lekérdezzük az aktuális képernyő méretet
function getWindowSize(){
    screenX = window.innerWidth-ballSize;
    screenY = window.innerHeight-ballSize; 
    setBatStartPoz();
}

// az ablak átméretezésekor frissítjük a képernyő koordinálátkat
window.addEventListener('resize', getWindowSize);

// mozgatjuk az ütőt a nyilakkal
document.addEventListener('mousemove', function(e){
    batX = e.x;
    console.log(batX);
    setBatPoz(batX);

})

function updateResults(){
    pointsLbl.innerHTML=points;
    speedLbl.innerHTML=speed;
}