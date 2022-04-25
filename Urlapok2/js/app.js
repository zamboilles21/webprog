let felveszBtn=document.querySelector('#felveszBtn'),
    form=document.querySelector('form'),
    kategoria=form.kategoria,
    gyarto=form.gyarto,
    tipus=form.tipus,
    evjarat=form.evjarat,
    szin=form.szin,
    uzemanyag=form.uzemanyag,
    allapot=form.allapot,
    leiras=form.leiras,
    extrak=[
        {'extra':'klima','ertek':form.klima.checked},
        {'extra':'Tempomat','ertek':form.Tempomat.checked},
        {'extra':'Vonóhorog','ertek':form.Vonohorog.checked},
        {'extra':'Elektromos ablak','ertek':form.elektromosbalak.checked},
        {'extra':'Alufelni','ertek':form.Alufelni.checked},
        {'extra':'automata','ertek':form.automata.checked},
        {'extra':'GPS','ertek':form.GPS.checked},
],
ar=form.ar,
kep=form.kep,
gepjarmuvek=[],
lista=document.querySelector('#lista'),
summ=document.querySelector('#summ'),
if (adatok=localStorage.getItem('gepjarmuvek')) {
    gepjarmuvek=JSON.parse(adatok);
}
formreset();
loadtable();



felveszBtn.addEventListener('click', ()=>{
    if (kategoria.value=='' || gyarto.value=='' || tipus.value=='' || evjarat.value==0 || gyarto.value=='' || gyarto.value=='' || uzemanyag.value=='' || ar.value==0) {
        alert('Hiányzó adat!')
    }
    else
    {
        gepjarmu={
            'id':gepjarmuvek.length+1,
            'kategora': kategoria.value,
            'gyarto':gyarto.value,
            'tipus':tipus.value,
            'evjarat':evjarat.value,
            'szin':szin.value,
            'uzemanyag':uzemanyag.value,
            'allapot':allapot.value,
            'leiras':leiras.value,
            'extrak': [
                {'extra':'klima','ertek':form.klima.checked},
                {'extra':'Tempomat','ertek':form.Tempomat.checked},
                {'extra':'Vonóhorog','ertek':form.Vonohorog.checked},
                {'extra':'Elektromos ablak','ertek':form.elektromosbalak.checked},
                {'extra':'Alufelni','ertek':form.Alufelni.checked},
                {'extra':'automata','ertek':form.automata.checked},
                {'extra':'GPS','ertek':form.GPS.checked},
            ],
            'ar':ar.value,
            'kep':kep.value
        }
        gepjarmuvek.push(gepjarmu);

        localStorage.setItem('gepjarmuvek',JSON.stringify(gepjarmuvek));
        alert('Felvéve!')
    }
    

});

function formreset(){
    kategoria.value='';
    gyarto.value='';
    tipus.value='';
    evjarat.value=0;
    szin.value='';
    uzemanyag.value='';
    allapot.value='normál';
    gyarto.value='';
    form.klima.checked=false;
    form.Tempomat.checked=false;
        form.Vonohorog.checked=false;
        form.elektromosbalak.checked=false;
        form.Alufelni.checked=false;
        form.automata.checked=false;
        form.GPS.cchecked=false;

ar.value=0;
kep.value='';

}

function loadtable(){
    summ.innerHTML=gepjarmuvek.length;

    gepjarmuvek.forEach(gepjarmu=>{
        let tr=document.createElement('tr');
        lista.appendChild(tr);

        let td1=document.createElement('td')
        td1.innerHTML=i+'.';
        tr.appendChild(td1);

        let td3=document.createElement('td')
        td2.innerHTML=gepjarmu.kategoria;;
        tr.appendChild(td2);
        
        let td3=document.createElement('td')
        td3.innerHTML=gepjarmu.gyarto;
        tr.appendChild(td3);

        let td4=document.createElement('td')
        td4.innerHTML=gepjarmu.tipus;
        tr.appendChild(td4);

        let td5=document.createElement('td')
        td5.innerHTML=gepjarmu.evjarat;
        tr.appendChild(td5);

        let td6=document.createElement('td')
        td6.innerHTML=gepjarmu.ar;
        tr.appendChild(td6);

        let td7=document.createElement('td')
        td7.innerHTML=i+'.';
        tr.appendChild(td7);

        

    })
}