// Accedo al servicio de la base de datos

var database = firebase.database();

var articles = database.ref().child('articles');

articles.on('value', function(ss){
    var article = ss.val();
    getId("autor").innerHTML = article.id.autor;
    getId("titulo").innerHTML = article.id.titulo;
    getId("link").innerHTML = article.id.link;
    getId("fecha").innerHTML = article.id.fechaLanzado;
});
var refRespuestas = database.ref().child('respuestas');
refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId('lista').appendChild(item);
});