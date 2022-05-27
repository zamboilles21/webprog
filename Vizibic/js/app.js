let name=$('name').val(),
    tipus=$('tipus').val(),
    elvitel=$('elvitel').val(),
    visszahozatal=$('visszahozatal').val();
    regBtn=document.querySelector('#RegBtn');

$('#RegBtn').on('click',()=>{
    localStorage.content = $('#container').html('Test');

    $('#container').html(localStorage.content);
})