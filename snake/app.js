const ELEMENTS=['field', 'block', 'snakebody', 'snakehead', 'apple', 'goldenapple', 'greenapple'],
      KEYS=[
        
      ],
      DIRECTION={
          UP:0,
          RIGHT:1,
          DOWN:1,
          LEFT:3
      }
let  easyBtn=document.querySelector("#easy"),
    mediumBtn=document.querySelector('#medium'),
    hardBtn=document.querySelector('#hard'),
    extremeBtn=document.querySelector('#extreme'),
    startBtn=document.querySelector('#startBtn');
    startPanel=document.querySelector('#startPanel');
    gameBackGround=document.querySelector('#gameBackGround');
    diffcultiy;
    speed=900;
    obstacle=0;

startBtn.addEventListener('click',()=>{
    if (difficulty != null) {
        switch (difficulty) {
            case 'easy':
                    {speed=800;obstacle=0;break;}
                    case 'medium':
                        {speed=800;obstacle=10;break;}
                        case 'hard':
                            {speed=800;obstacle=20;break;}
                            case 'extreme':
                                {speed=800;obstacle=30;break;}
                
        
            
        }
        SwitchPanel(1,2);
    }else{
        window.alert("Válasz már nehézséget!")
    }
});

easyBtn.addEventListener('click', ()=>{
    diffcultiy='easy';
    easyBtn.classList.add('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
});
easyBtn.addEventListener('click', ()=>{
    diffcultiy='medium';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.add('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
});
easyBtn.addEventListener('click', ()=>{
    diffcultiy='hard';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.add('selectedBtn');
    extremeBtn.classList.remove('selectedBtn');
});
extremeBtn.addEventListener('click', ()=>{
    diffcultiy='extreme';
    easyBtn.classList.remove('selectedBtn');
    mediumBtn.classList.remove('selectedBtn');
    hardBtn.classList.remove('selectedBtn');
    extremeBtn.classList.add('selectedBtn');
});

function SwitchPanel (a,b) {
    
}