// Accedo al servicio de la base de datos

var database = firebase.database();

//Accedo a un documento
var articles = database.ref('articles');

//Accder a los datos internos
articles.on('value', function(ss){
    //Codigo  devuelve el valor de lo que busca
    var article = ss.val()
    console.log(article);
    getId("autor").innerHTML = article.id.autor;
    getId("titulo").innerHTML = article.id.titulo;
    getId("link").innerHTML = article.id.link;
    getId("fecha").innerHTML = article.id.fechaLanzado;
});