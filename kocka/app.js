let A=[20];
let B=[20];
let C=[20];

let container=document.querySelector('#container');

for (i = 0; i < 20; i++) {
    kockadobas(i);
    eredmenykiiras(i);
    
}
function eredmenykiiras(x)
{
    let div=document.createElement('div');
    container.appendChild(div);
    div.classList.add('dobas');

    let img=document.createElement('img');
    img.src=`${A[x]}.png`;
    img.title=`a[${x}]=${A[x]}`;
    div.appendChild(img);
    
    img=document.createElement('img');
    img.src=`${B[x]}.png`;
    img.title=`B[${x}]=${B[x]}`;
    div.appendChild(img);

    img=document.createElement('img');
    img.src=`${C[x]}.png`;
    img.title=`C[${x}]=${C[x]}`;
    div.appendChild(img);
}

function kockadobas(x) {
    A[x]= (Math.round(Math.random()*5)+1);
    B[x]= (Math.round(Math.random()*5)+1);
    C[x]= (Math.round(Math.random()*5)+1);
}
function osszes() {
    let osszeg = 0;
    for(i = 0; i < A.length; i++){
        osszeg += A[i] + B[i] + C[i];
    }
    return osszeg / A.length;
    
}
document.writeln("Az összeg: "+osszes())
console.log("Az összeg: "+osszes())
function max()
{
    let max1 = 0;
    for (i = 0; i < A.Length; i++)
    {
        if (A[i] + B[i] + c[i]> max1)
        {
            max1 = tomb[i];
        }
        return max1;
    }
    
}
document.writeln("MAX:"+max())
console.log("MAX: "+max())
function hatos(){
    hatso=0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 6 & B[i]==6 & C[i] == 6) {
            hatso++;
        }
        
    }
    return hatso;
}
document.writeln("Hatos: "+hatos())
console.log("Hatos: "+max())
