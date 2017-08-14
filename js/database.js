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
//Acceso a un documento
var ref = database.ref('articles');
ref.on('value', function(ss) {
  var encuesta = ss.val();
  getId('pregunta').innerHTML = encuesta.pregunta;
});


//escritura en una colección
getId('agregar').addEventListener('click', function() {
  var user = auth.currentUser;
  if(!user) {
    mensajeFeedback('Haz login para votar la encuesta');
    return false;
  }
    
    var articles = database.ref().child('articles').child('id');

    articles.on('value', function(ss){
        var articleitem = ss.val();)};
        console.log(articleitem);
});
