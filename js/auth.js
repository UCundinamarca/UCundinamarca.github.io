//Accedo al servicio de autenticacion
var auth = firebase.auth();

//Login de usuarios
getId('usericon').addEventListener('click', function() {
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


auth.onAuthStateChanged(function(user) {
  if (user) {
    getId('usericon').value = 'Salir';
  } else {
    getId('usericon').value = 'Ingresar';
  }
});

getId('logouticon').addEventListener('click', function() {
  auth.signOut()
    .then(function() {
      mensajeFeedback('Sesión cerrada');
    });
});