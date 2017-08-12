// Accedo al servicio de la base de datos

var database = firebase.database();



//Agregar elementos al HTML y llenarlos, agregar hijos de la tabla con child_added
//acceso a una colección
var refRespuestas = database.ref('respuestas');
refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    console.log(respuesta);
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
    getId('lista').appendChild(item);
});