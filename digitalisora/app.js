let startstopBtn=document.querySelector('#startstop');
let resetBtn=document.querySelector('#resetBtn');
let kijelzo=document.querySelector('#kijelzo');
let ezredmp=0, 
    mp=0, 
    perc=0,
    ora=0

reset();

startstopBtn.addEventListener('click',function()
{

});

resetBtn.addEventListener('click',function(){


});

function reset()
{
    ezredmp=0;
    mp=0;
    perc=0;
    ora=0;

    kijelzo.innerHTML=kiir(ora,2)+":"+kiir(perc,2)+":"+kiir(mp,2)+"."+kiir(ezredmp,3)
}

function kiir(mit, helyiertek)
{
    if (mit<10) {
        mit='0'+mit
    }
    return mit;
}