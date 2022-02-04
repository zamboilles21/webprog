let napok=['Hétfő','Kedd','Szerda','Csütötök','Péntek'];
let orak=[0,1,2,3,4,5,6,7,8];
let tantargyak=[
    {nev:'Hálózatok', terem: '103', tanar:'VJ', bgcolor: '#0000ff'},
 {nev:'Webprogramozás 1', terem: '311', tanar:'NSZ', bgcolor: '#00ff00'},
 {nev:'Webprogramozás 2', terem: '206', tanar:'SD', bgcolor: '#ff0000'},
 {nev:'Asztali alk.', terem: '205', tanar:'TP', bgcolor: '#237822'},
 {nev:'Szoftvertesztelés', terem: '100', tanar:'FZ', bgcolor: '#123456'},
 {nev:'Szakmai Angol', terem: '213', tanar:'RE', bgcolor: '#654231'},
 {nev:'Adatbázis kezelés', terem: '206', tanar:'HR', bgcolor: '#325467'}

];
let orarend=[
    {dayIndex:2,hourIndex:5,subjectIndex:6}
];

let daySelect=document.querySelector('#day');
let hourSelect=document.querySelector('#hour');
let subjectSelect=document.querySelector('#subject');
let addBtn=document.querySelector('#addBtn');
let dayIndex;
let hourIndex;
let subjectIndex;


addDays();
addHours();
addSubjects();

addBtn.addEventListener('click',function() {
    if (dayIndex==null||hourIndex==null||subjectIndex==null) {
        window.alert("Üres")
    }else
    {


        let cella=document.querySelector('#cell_'+dayIndex+hourIndex);
        cella.innerHTML=tantargyak[subjectIndex].nev;

        orarend.push({dayIDX: dayIndex,hourIDX:hourIndex,subjectIDX:subjectIndex});

        localStorage.setItem('timetable',JSON.stringify(orarend));
        daySelect.value="";
        hourSelect.value="";
        subjectSelect.value="";
        dayIndex=null;
        hourIndex=null;
        subjectIndex=null;
    }
    
})
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
    orak.forEach(ora=>{
        let hour=document.createElement('option');
        hour.value=i;
        hour.innerHTML=ora;
        hourSelect.appendChild(hour);
        i++;
    });
}
function addSubjects() {
    let i = 0;
    tantargyak.forEach(tantargy=>{
        let subject=document.createElement('option');
        subject.value=i;
        subject.innerHTML=tantargy.nev;
        subjectSelect.appendChild(subject);
        i++;
    });
}
daySelect.addEventListener('change',function(){
    dayIndex=daySelect.value;
});
hourSelect.addEventListener('change',function(){
    hourIndex=hourSelect.value;
});
daySelect.addEventListener('change',function(){
    subjectIndex=subjectSelect.value;
});
    