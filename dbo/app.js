let container=document.querySelector('#container');
let Btn = document.querySelector('#gomb');

let A=[];
let B=[];


function eredmenykiiras(x)
{
    let div=document.createElement('div');
    container.appendChild(div);
    div.classList.add('dobas');

    let img=document.createElement('img');
    img.src=`${A[x]}.png`;
    img.title=`A[${x}]=${A[x]}`;
    div.appendChild(img);
    
    
}
function eredmenykiiras2(x)
{
    let div=document.createElement('div');
    container.appendChild(div);
    div.classList.add('dobas');

    let img=document.createElement('img');
    img.src=`${B[x]}.png`;
    img.title=`B[${x}]=${B[x]}`;
    div.appendChild(img);
    
    
}
function kockadobas(x) {
    A[x]= (Math.round(Math.random()*5)+1);
    
}
function kockadobas2(x) {
    B[x]= (Math.round(Math.random()*5)+1);
    
}
Btn.addEventListener('click', () => {
    for (i = 0; i < 1; i++) {
        
        kockadobas(i);
        eredmenykiiras(i);
        
        for (let j = 0; j < 1; j++) {
            
            kockadobas2(i);
            eredmenykiiras2(i);
        }
    }
    });