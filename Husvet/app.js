let szam=document.querySelector('#szam');
let addBtn=document.querySelector('#gomb');
let T;


addBtn.addEventListener('click',function() {
    if (1901<=T<=2099) {
        T=szam;
        let A=T%19;
        let B=T%4;
        let C=T%7;
        let D=(19*A+24)%30;
        let E=(2*B+4*C+6*D+5)%7;
        let H=22+D+E;
    }
    if (T>31) {
        
    }
})



