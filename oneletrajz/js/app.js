$('document').ready(function(){
    contentLoad('ember');
    $('#info').html(infos.address);
    $('#info2').html(infos.email);
    $('#info3').html(infos.phone);
})
function contentLoad(page){
    $('#content').load(page+'.html')
    
    setTimeout(() => {
        $('#'+page).html(getpeople(page));
    }, 500);
    
}
let infos={
    "address":"6500 Baja, Bácska tér 1.",
    "email":"valami@valami.hu",
    "phone":"06203339988"
}
let emberek=[
{
    "categories": "ember",
    "name": "Kiss Lajos",
    "age": 22,
    "gender": "Férfi",
    "cim":"6500 Baja, Bácska tér 1.",
    "phone": "06703332255",
    "email":"valami@valami.hu",
    "birthdate":"2001.01.08"

},
{
    "categories": "ember",
    "name": "Kiss Pista",
    "age": 25,
    "gender": "Férfi",
    "cim":"6500 Baja, Bácska tér 1.",
    "phone": "06703332255",
    "email":"valami@valami.hu",
    "birthdate":"2001.01.08"

}
]
function getpeople(categories)
{
    let str = '';
    emberek.forEach(ember => {
        if (ember.categories == categories){
            str += `<div class="card" style="width: 18rem;">
            
            <div class="card-body">
            <h5 class="card-title">${emberek.name}</h5>
            <p class="card-text">Önéletrajz</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${emberek.gender}</li>
            <li class="list-group-item">${emberek.cim}</li>
            <li class="list-group-item">${emberek.phone}</li>
            <li class="list-group-item">${emberek.email}</li>
            <li class="list-group-item">${emberek.birthdate}</li>
            <li class="list-group-item">${emberek.age} éves</li>
            
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Megnézem</a>
              </div>
              </div>`;
              
        }
    });

    return str;
}