// Accedo al servicio de la base de datos

var database = firebase.database();

var refRespuestas = database.ref("ask");

refRespuestas.on("child_added", function(ss) {
    var respuesta = ss.val();
    console.log("valor: " + respuesta.valor);
    console.log("respuesta: " + respuesta.respuesta);
});


//var commentsRef = firebase.database().ref('post-comments/' + postId);
//commentsRef.on('child_added', function(data) {
//  addCommentElement(postElement, data.key, data.val().text, data.val().author);
//});