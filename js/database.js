// Accedo al servicio de la base de datos

var database = firebase.database();

var articles = database.ref().child('articles').child('id');

articles.on('value', function(ss){
    var article = ss.val();
    getId("autor").innerHTML = article.autor;
    getId("titulo").innerHTML = article.titulo;
    getId("link").innerHTML = article.link;
    getId("fecha").innerHTML = article.fechaLanzado;
});
var refRespuestas = database.ref().child('articles').child('respuestas');
refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    console.log(respuesta);
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId("lista").appendChild(item);
});