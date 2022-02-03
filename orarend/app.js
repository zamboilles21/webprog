let napok=['Hétfő','Kedd','Szerda','Csütötök','Péntek'];
let orak=[0,2,3,4,5,6,7,8];
let tantargyak=[
    {
        
    }
];

let daySelect=document.querySelector('#day');
let hourSelect=document.querySelector('#hour');
let subjectSelect=document.querySelector('#subjects');
let addBtn=document.querySelector('#addBtn');

addDays();
addHours();
addSubjects();

function addDays() {
    let i = 0;
    napok.forEach(nap=>{
        let day=document.createElement('option');
        day.value=i;
        day.innerHTML=nap;
        daySelect.appendChild(day);
        i++;
    });
}
function addHours() {
    let i = 0;
    napok.forEach(ora=>{
        let hour=document.createElement('option');
        ora.value=i;
        ora.innerHTML=nap;
        hourSelect.appendChild(ora);
        i++;
    });
}
function addSubjects() {
    let i = 0;
    napok.forEach(tantargy=>{
        let subject=document.createElement('option');
        subject.value=i;
        subject.innerHTML=tantargy;
        subkectSelect.appendChild(subject);
        i++;
    });
}