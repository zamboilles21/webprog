let easyBtn=document.querySelector("#easy"),
    mediumBtn=document.querySelector('#medium'),
    hardBtn=document.querySelector('#hard'),
    extremeBtn=document.querySelector('#extreme'),
    startBtn=document.querySelector('#startBtn');
    diffcultiy;
easyBtn.addEventListener('click', ()=>{
    diffcultiy='easy';
    easyBtn.classList.add('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
})
easyBtn.addEventListener('click', ()=>{
    diffcultiy='medium';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.add('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
})
easyBtn.addEventListener('click', ()=>{
    diffcultiy='hard';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.add('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
})
extremeBtn.addEventListener('click', ()=>{
    diffcultiy='extreme';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.add('selectedBtn');
})