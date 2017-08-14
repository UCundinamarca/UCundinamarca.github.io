//Accedo al servicio de autenticacion
var auth = firebase.auth();

//Login de usuarios
getId('login').addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(function(result) {
      var user = result.user;
      console.log(user);
      mensajeFeedback('Autenticado correctamente: ' + user.displayName);
    }).catch(function(error) {
      var errorMessage = error.message;
      mensajeFeedback('Error de autenticación: ' + errorMessage);
    });
});

