let box1 = document.getElementById('box1');
let boxes = document.getElementsByClassName('box3');
let boxType=document.getElementsByName('doboz');
box1.innerHTML+=<p class="bekezdés">"Bekezdés"</p>;

boxType.forEach(box3=>{box3.style.border='5px solid green';});

let dobozok = document.querySelectorAll('box1');
box1.style.left='100px'
