let ball = document.querySelector('#ball');
let ballSize=54;
let speed=3;
let ballX=Math.round(Math.random()*screenX);
let ballY=0;
let screenX=window.innerWidth-ballSize;
let screenY=window.innerHeight-ballSize;
let dx=1;
let dy=1;
ball.style.top=ballY+'px';
ball.style.left=ballX+'px';

ball.style.width=ballY+'px';
ball.style.height=ballX+'px';

setInterval(moveBall,10)

function moveBall(){
    ballX+=dx*speed;
    ballY+=dy*speed;
    ball.style.top=ballY+'px';
    ball.style.left=ballX+'px';
    if((ballY>=screenY-6)||(ballY<=-8))
    {
        dy *= -1;
    }
    if((ballX>=screenX-6)||(ballX<=-8))
    {
        dx *= -1;

    }
}

function setBallsize(size){
    ball.style.width=size+'px';
    ball.style.height=size+'px';
}
