//Accedo al servicio de autenticacion
var auth = firebase.auth();

//Login de usuarios
getId("login").addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then( function (result) {
            var user = result.user;
            console.log("El usuario es ", user);
        })
        .catch(function (err) {
            console.log("Hubo un error" + err);
        })
});