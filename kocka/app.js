let A=[20];
let B=[20];
let C=[20];

let container=document.querySelector('#container');

for (i = 0; i < 20; i++) {
    kockadobas(i);
    eredmenykiiras(i);
    
}
function eredmeny(x)
{
    let div=document.createElement('div');
    container.appendChild(div);
    div.classList.add('dobas');

    let img=document.createElement('img');
    img.src=`/img/${A[x]}.PNG`
}

function kockaDobas(x) {
    A[x]= (Math.round(Math.random()*5)+1);
    B[x]= (Math.round(Math.random()*5)+1);
    C[x]= (Math.round(Math.random()*5)+1);
}