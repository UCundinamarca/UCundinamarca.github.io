// Accedo al servicio de la base de datos

var database = firebase.database();

var articles = database.ref().child('articles').child('id');

articles.on('child_added', function(ss){
    var article = ss.val();
    var trItem = document.createElement('tr');
    trItem.innerHTML = '<td id="autor">'+ article.autor +'</td><td id="titulo">'+ article.titulo +'</td><td id="link"><a href="' + article.link + '"><i class="fa fa-external-link" aria-hidden="true"></i></a></td><td id="fecha">'+ article.fechaLanzado +'</td>';
    getId("tbody").appendChild(trItem);
});
var refRespuestas = database.ref().child('articles').child('respuestas');
refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    var item = document.createElement('li');
    item.className += " list-group-item";
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId("lista").appendChild(item);
});
function writeDB(){
    var articles = database.ref().child('articles').child('id');

    articles.on('child_added', function(ss){
    var article = ss.val();
    var s = getId("titulo");
    s.value = "new value";
    console.log(s.value);
    console.log(article.titulo);
    if(article.titulo.toLowerCase() = s.value.toLowerCase()){
        console.log("YA Existe esta entrada");
    }
    });
};
