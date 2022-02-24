
let edzesek=['váll- és házedzés','Karedzés','melledzés','lábedzés']
let pihenonap='---';
let aktedzes=3;
let ma=new Date();
let aktev=ma.getFullYear();
let napszamok=[31,28+szokoev(aktev),31,30,31,30,31,31,30,31,30,31]
let  aktho=ma.getUTCMonth();
let aktnap=ma.getDate();
let table=document.querySelector("#edzesnaptar");
console.log(aktho)
console.log(aktnap)
console.log(aktev)


let k=aktnap;
for (i = 0; i < 30; i++) {
    naptarhoz_ad(aktho,k);
    k++;
    if (k>napszamok[aktho]) {
        aktho++;
        k=1;
    }
    

}

function naptarhoz_ad(aktho,nap)
{
    document.createElement('tr');
    table.appendChild(tr);
    let td1=document.createElement('td');
    td1.classList('cella');
    td1.innerHTML=kiir(aktho+1)+'.'+kiir(nap);
    let td2=document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);


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