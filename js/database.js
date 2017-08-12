// Accedo al servicio de la base de datos

var database = firebase.database();

//Accedo a un documento
//Acceso a un documento
var ref = database.ref('encuesta');
ref.on('value', function(ss) {
  var encuesta = ss.val();
  getId('preg').innerHTML = encuesta.pregunta;
  getId('desc').innerHTML = encuesta.descripcion;
});

//Agregar elementos al HTML y llenarlos, agregar hijos de la tabla con child_added

var refRespuestas = database.ref('ask');
refRespuestas.on('child_added', function(ss) {
   var respuesta = ss.val();
   var item = document.createElement('li');
   item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
   getId('lista').appendChild(item);
});