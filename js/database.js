// Accedo al servicio de la base de datos

var database = firebase.database();

//Accedo a un documento
var articles = database.ref('articles');

//Accder a los datos internos de a uno con value
articles.on('value', function(ss){
    //Codigo  devuelve el valor de lo que busca
    var article = ss.val();
    getId("autor").innerHTML = article.id.autor;
    getId("titulo").innerHTML = article.id.titulo;
    getId("link").innerHTML = article.id.link;
    getId("fecha").innerHTML = article.id.fechaLanzado;
});

//Agregar elementos al HTML y llenarlos, agregar hijos de la tabla con child_added
//acceso a una colección
var refRespuestas = database.ref('respuestas');
refRespuestas.on('child_added', function(data) {
    var respuesta = data.val()
    console.log(respuesta);
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId("lista").appendChild(item);
});
//var commentsRef = firebase.database().ref('post-comments/' + postId);
//commentsRef.on('child_added', function(data) {
//  addCommentElement(postElement, data.key, data.val().text, data.val().author);
//});