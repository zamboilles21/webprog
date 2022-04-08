let regBtn = document.querySelector('#regBtn'),
    username = document.querySelector('#name'),
    address = document.querySelector('#address'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    pass1 = document.querySelector('#pass1'),
    pass2 = document.querySelector('#pass2');


let users=[]
if (users=localStorage.getItem('users')) {
    users=JSON.parse(localStorage.getItem('users'))
}else{
    users=[];
}



regBtn.addEventListener('click', () => {
    let requiredElements = [username, email, pass1, pass2];
    let is_empty = false;

    requiredElements.forEach(element => {
        if (element.value == '') {

            element.classList.add('missing');
            is_empty = true;

        } else {
            element.classList.remove('missing');
        }
    })

    if (is_empty) {
        alert('Nem adtál meg minden kötelező adatot!');
    }else{
        if (pass1.value!=pass2.value) {
            alert("Nem egyeznek!")
            pass1.classList.add('missing');
            pass2.classList.add('missing');
        }else{
            

            let pass_exp="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/";
            if (pass1.value.match(pass_exp)) {
                alert('A jelszó nem felel meg a minimumnak!!!')
            }else{
                let reservedemail=false;
                users.forEach(user=>{
                    if (user.email==email.value) {
                        reservedemail=true;
                        break;
                    }

                });
                if (reservedemail=true) {
                    email.classList.add('missing');
                    alert('Az email foglalt!')
                }else{
                let user={
                        'id':user.length+1,
                        'name':user.value,
                        'address':address.value,
                        'email':email.value,
                        'phone':phone.value,
                        'password':pass1.value


                }
            }
                users.push(user);
                localStorage.setItem('users',JSON.stringify(users))
            }
        }
    }
    //alert('Köszönjük a regisztrációt!');
});