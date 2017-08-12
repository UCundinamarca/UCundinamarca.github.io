// Accedo al servicio de la base de datos

var database = firebase.database();


var refRespuestas = database.ref().child('respuestas');
refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    console.log(respuesta);
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId("lista").appendChild(item);
});