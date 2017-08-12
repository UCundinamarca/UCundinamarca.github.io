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

