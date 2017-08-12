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
var ref = database.ref('respuestas');
ref.addChildEventListener(new ChildEventListener() {
    @Override
    public void onChildAdded(DataSnapshot dataSnapshot, String prevChildKey) {
        Post newPost = dataSnapshot.getValue(Post.class);
        System.out.println("Author: " + newPost.author);
        System.out.println("Title: " + newPost.title);
        System.out.println("Previous Post ID: " + prevChildKey);
    }
});