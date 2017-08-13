// Accedo al servicio de la base de datos

var database = firebase.database();

var articles = database.ref().child('articles').child('id');

articles.on('child_added', function(ss){
    var article = ss.val();
    console.log(article);
});