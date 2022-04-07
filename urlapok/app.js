let REGbtn=document.querySelector('#REGbtn'),
    username=document.querySelector('#name'),
    address=document.querySelector('#address'),
    email=document.querySelector('#email'),
    phone=document.querySelector('#phone'),
    pass1=document.querySelector('#pass1'),
    pass2=document.querySelector('pass2');


REGbtn.addEventListener('click', ()=>{
    
    if(username.value == '' || email.value == ''|| pass1.value=='' || pass2==''){
        if (username.value=='') {
            username.classList.add('missing');
        }
        alert('Nincs adat megadva')
    }
});