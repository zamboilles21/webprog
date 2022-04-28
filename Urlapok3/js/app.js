let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    Gyarto = form.Gyarto,
    
    modell = form.Model,
    Memoria = form.Memoria,
    Kamera = form.Kamera,
    leiras = form.leiras,
    OP= [
        { 'OP': 'IOS', 'ertek': form.IOS.checked },
        { 'OP': 'Android', 'ertek': form.Android.checked },
        { 'OP': 'Egyeb', 'ertek': form.Egyeb.checked },
        
    ],
    Szolgaltato= form.Szolgaltato,
    ar = form.ar,

    telefonok=[],

    lista = document.querySelector('#lista'),
    summ = document.querySelector('#summ');

    if (adatok = localStorage.getItem('telefonok')){
        telefonok = JSON.parse(adatok);
    }
    formreset();
    loadTable();

    felveszBtn.addEventListener('click', () => {
        if (Gyarto.value == '' || modell.value == '' || Memoria.value == '' || Kamera.value == '' || leiras.value == '' || Szolgaltato.value == '' || ar.value==0 )
        {
            alert('Nem adtál meg minden kötelező adatot!');
        }
        else
        {
            gepjarmu = {
                'id': telefonok.length+1,
                
                'Gyarto': Gyarto.value,
                'modell': modell.value,
                'Memoria': evjarat.value,
                'szin': szin.value,
                'uzemanyag': uzemanyag.value,
                'allapot': allapot.value,
                'leiras': leiras.value,
                'extrak': [
                    { 'extra': 'Automata váltó', 'ertek': form.automatavalto.checked },
                    { 'extra': 'Elektromos ablak', 'ertek': form.elektromosablak.checked },
                    { 'extra': 'Alufelni', 'ertek': form.alufelni.checked },
                    { 'extra': 'Klíma', 'ertek': form.klima.checked },
                    { 'extra': 'Tempomat', 'ertek': form.tempomat.checked },
                    { 'extra': 'Vonóhorog', 'ertek': form.vonohorog.checked },
                    { 'extra': 'GPS', 'ertek': form.gps.checked },
                    { 'extra': 'CD Rádió', 'ertek': form.cdradio.checked },
                    { 'extra': 'Napfénytető', 'ertek': form.napfenyteto.checked }
                ],
                'ar': ar.value,
                'kep': kep.value
            }
    
            gepjarmuvek.push(gepjarmu);
    
            localStorage.setItem('gepjarmuvek', JSON.stringify(gepjarmuvek));
    
            alert('Gépjármű felvéve!');
        }
    });
    
    
    function formreset(){
        kategoria.value = '';
        gyarto.value = '';
        tipus.value = '';
        evjarat.value = 0;
        szin.value = '';
        uzemanyag.value = '';
        allapot.value = 'normál';
        leiras.value = '';
        form.automatavalto.checked = false;
        form.elektromosablak.checked = false;
        form.alufelni.checked  = false;
        form.klima.checked  = false;
        form.tempomat.checked  = false;
        form.vonohorog.checked  = false;
        form.gps.checked  = false;
        form.cdradio.checked  = false;
        form.napfenyteto.checked  = false;
        ar.value = 0;
        kep.value = '';
    }
    
    function loadTable(){
        summ.innerHTML = gepjarmuvek.length;
        let  i = 1;
        gepjarmuvek.forEach(gepjarmu => {
            let tr = document.createElement('tr');
            lista.appendChild(tr);
    
            let td1 = document.createElement('td');
            td1.innerHTML = i + '.';
            tr.appendChild(td1); 
    
            let td2 = document.createElement('td');
            td2.innerHTML = gepjarmu.kategoria;
            tr.appendChild(td2); 
    
            let td3 = document.createElement('td');
            td3.innerHTML = gepjarmu.gyarto;
            tr.appendChild(td3); 
    
            let td4 = document.createElement('td');
            td4.innerHTML = gepjarmu.tipus;
            tr.appendChild(td4); 
    
            let td5 = document.createElement('td');
            td5.innerHTML = gepjarmu.evjarat;
            tr.appendChild(td5); 
    
            let td6 = document.createElement('td');
            td6.innerHTML = gepjarmu.ar;
            tr.appendChild(td6); 
    
            let td7 = document.createElement('td');
            td7.innerHTML = '<a href="/info/'+gepjarmu.id+'"> Részletek...</a>';
            tr.appendChild(td7); 
    
            i++;
        });
    }