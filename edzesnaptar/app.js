
let edzesek=['váll- és házedzés','Karedzés','melledzés','lábedzés']
let pihenonap='---';
let aktedzes=3;
let ma=new Date();
let aktev=ma.getFullYear();
let napszamok=[31,28+szokoev(aktev),31,30,31,30,31,31,30,31,30,31]
let  aktho=ma.getUTCMonth();
let aktnap=ma.getUTCDay();

console.log(aktho)
console.log(aktnap)
console.log(aktev)


let k=0;
for (let i = 0; i < 30; i++) {
    document.writeln(kiir(aktho+1)+'.'+kiir(k)+'<br>');
    k++;
    if ((aktnap+k)>napszamok[aktho]) {
        aktho++;
        k=1;
    }
    
}
function kiir(szam) {
    if (szam<10) {
        szam='0'+szam;
    }
    return szam;
}
function szokoev(ev) {
    let nap=0;
    if ((ev%4==0)&&(ev%100!=0)||(ev%400==0)) {
        nap=1
    }
    return nap;
}


document.getElementById("datum").innerHTML = d;