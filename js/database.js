// Accedo al servicio de la base de datos

var database = firebase.database();



var ref = database.ref('juegos');
ref.on("child_added", function(snapshot){
	console.log("El juego actual es ", snapshot.val());
	console.log("El id actual es ", snapshot.key());
});