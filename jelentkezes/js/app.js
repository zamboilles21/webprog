let jelentBtn = document.querySelector('#jelentBtn'),
    username = document.querySelector('#name'),
    email = document.querySelector('#email'),
    idopont = form.idopont,
    Vizsga=form.Vizsga,
    Elfog=form.elfog.checked,
    vizsgatargyak = [
        {
        "vizsgatargy" : "Adatbázis-kezelés",
        "idopontok" : [
        "2022.06.10. 8:00",
        "2022.06.10. 10:00",
        "2022.06.15. 8:00"
        ],
        "maxfo" : 10,
        "aktfo" : 0
        },
        {
        "vizsgatargy" : "Frontend-Backend programozás",
        "idopontok" : [
        "2022.06.11. 8:00",
        "2022.06.11. 10:00"
        ],
        "maxfo" : 5,
        "aktfo" : 0
        },
        {
        "vizsgatargy" : "Asztali alkalmazás fejlesztés",
        "idopontok" : [
        "2022.06.12. 8:00",
        "2022.06.12. 10:00",
        "2022.06.13. 8:00",
        "2022.06.13. 10:00"
        ],
        "maxfo" : 6,
        "aktfo" : 0
        },
        {"vizsgatargy" : "Mobil alkalmazás fejlesztés",
        "idopontok" : [
        "2022.06.19. 8:00",
        "2022.06.20. 8:00",
        "2022.06.21. 8:00"
        ],
        "maxfo" : 8,
        "aktfo" : 0}
        
        ];
        
        let vizsgazok = [
        {
        "vizsgatargy" : "Asztali alkalmazás fejlesztés",
        "idopont" : "2022.06.12. 10:00",
        "nev" : "Kis Béla",
        "email" : "kb@gmail.com"
        },
        {
        "vizsgatargy" : "Adatbázis-kezelés",
        "idopont" : "2022.06.15. 8:00",
        "nev" : "Nagy Péter",
        "email" : "np@gmail.com"
        }
        ];
    

        
jelentBtn.addEventListener('click', () => {
    if (username.value == '' || email.value == '' || idopont.value == '' || Vizsga.value == '')
        {
            alert('Nem adtál meg minden kötelező adatot!');
        }else{
            vizsgatargy={

                'uswename': username.value,
                'email': email.value,
                'idopont': idopont.value,
                'vizsga': Vizsga.value,
            }
            vizsgatargyak.push(vizsgatargy);
            localStorage.setItem('vizsgatargyak', JSON.stringify(vizsgatargyak));
            alert('Jelentkezes elfogadva');
        }
        

});
