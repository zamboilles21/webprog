let  = email = document.querySelector('#email'),
    pass1 = document.querySelector('#pass1'),
    beBtn = document.querySelector('#beBtn');

    beBtn.addEventListener('click', () => {
        let requiredElements = [email, pass1];
        let is_empty = false;
    
        requiredElements.forEach(element => {
            if (element.value == '') {
    
                element.classList.add('missing');
                is_empty = true;
    
            } else {
                element.classList.remove('missing');
            }
        })
    });
