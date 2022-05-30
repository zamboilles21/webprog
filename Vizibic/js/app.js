let name=$('name').val(),
    tipus=$('tipus').val(),
    elvitel=$('elvitel').val(),
    visszahozatal=$('visszahozatal').val();
    regBtn=document.querySelector('#RegBtn');

let biciklik=[];

$('#RegBtn').on('click',()=>{
    localStorage.content = $('#container').html('Test');

    $('#container').html(localStorage.content);
    if (name.val=='' || tipus.val=='' || elvitel.val=='' || visszahozatal.value=='') {
        alert('Hiányzó adat!')
    }
    else
    {
        bicikli={
            
            'name': name.val(),
            'tipus':tipus.val(),
            'elvitel':elvitel.val(),
            'vissza':visszahozatal.val()
            
            
        }
        biciklik.push(bicikli);

        localStorage.setItem('biciklik',JSON.stringify(biciklik));
        alert('Felvéve!')
    }


    
})

document.querySelector('span').innerHTML=biciklik.length