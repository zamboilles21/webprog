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
        {'extra':'klima','ertek':form.klima.value},
        {'extra':'Tempomat','ertek':form.Tempomat.value},
        {'extra':'Vonóhorog','ertek':form.Vonohorog.value},
        {'extra':'Elektromos ablak','ertek':form.elektromosbalak.value},
        {'extra':'Alufelni','ertek':form.Alufelni.value},
        {'extra':'automata','ertek':form.automata.value},
        {'extra':'GPS','ertek':form.GPS.value},
]



felveszBtn.addEventListener('click', ()=>{
    alert('Felvéve!')

})