// Accedo al servicio de la base de datos

var database = firebase.database();

var articles = database.ref().child('articles').child('id');

articles.on('child_added', function(ss){
    var article = ss.val();
    var trItem = document.createElement('tr');
    trItem.innerHTML = '<td id="autor">'+ article.autor +'</td><td id="titulo">'+ article.titulo +'</td><td id="link"><a href="' + article.link + '"><i class="fa fa-external-link" aria-hidden="true"></i></a></td><td id="fecha">'+ article.fechaLanzado +'</td>';
    getId("tablaArticulos").appendChild(trItem);
});