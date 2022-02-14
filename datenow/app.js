
var d = new Date();
document.getElementById("datum").innerHTML = d;

var dobozok=document.getElementsByTagName('div');
dobozok[0].innerText="Első";
dobozok[dobozok.length-1].innerText="Utolsó";

var lista=document.getElementsById('lista');
var listaElem=lista.children[0].innerText;
lista.children[0].innerText=lista.children[1].innerText;
lista.children[1].innerText=listaElem;

var valaszto = document.getElementsById('valaszto');
var kimenet=document.getElementById('kimenet');
valaszto.addEventListener('change',function() {
    kimenet.innerHTML='text: '+valaszto.options[valaszto.selectIndex].text+'value: '+valaszto.value;
    
})

