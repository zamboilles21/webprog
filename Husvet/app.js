
let addBtn=document.querySelector('#gomb');

addBtn.addEventListener('click',function() {
    let szam=document.querySelector('#szam').value;

let T;
    T=szam;
    if (1901<=T<=2099) {
        
        let A=T%19;
        let B=T%4;
        let C=T%7;
        let D=(19*A+24)%30;
        let E=(2*B+4*C+6*D+5)%7;
        let H=22+D+E;
        if (H<=31) {
            window.alert("Húsvét Március "+H)
        }else{
            window.alert("Húsvét: Április "+(H-31))
        }
        
        console.log(H);
    }
    
    
})



