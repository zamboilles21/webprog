let startstopBtn=document.querySelector('#startstop');
let resetBtn=document.querySelector('#resetBtn');
let kijelzo=document.querySelector('#kijelzo');
let ezredmp=0, 
    mp=0, 
    perc=0,
    ora=0
let run=0;
reset();

startstopBtn.addEventListener('click',function()
{
    if (run) {
        run=0;
        clearInterval(stopper);
    }else{
        run=1;
        stopper=setInterval(szamlal,10);
    }

});
function szamlal()
{
    ezredmp++;
    if (ezredmp==1000) {
        mp++;
        ezredmp=0;
    }
    if (mp==60) {
        perc++;
        mp=0;
    }
    if (perc==60) {
        ora++;
        perc=0;
    }
    if (ora==24) {
        ora=0;
    }
    megjelenit();
}

resetBtn.addEventListener('click',function(){
    reset();

});

function reset()
{
    ezredmp=0;
    mp=0;
    perc=0;
    ora=0;
    megjelenit();
   
}

function kiir(mit, helyiertek)
{
    while (mit.length!=helyiertek) {
        mit='0'+mit
    }
    
    return mit;
}
function megjelenit()
{
    kijelzo.innerHTML=kiir(ora,2)+":"+kiir(perc,2)+":"+kiir(mp,2)+"."+kiir(ezredmp,3)
}