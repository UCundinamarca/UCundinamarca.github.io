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
    getId('usericon').innerHTML = 'Salir';
  } else {
    getId('usericon').innerHTML = '<i class="fa fa-user-circle-o" aria-hidden="true"></i> Ingresar';
  }
});

