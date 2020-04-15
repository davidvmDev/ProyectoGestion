/*coneccion base de datos*/
var config = {
    apiKey: "AIzaSyDJS6peY9rslv81SoN2Q08JcSTnVFYD_2E",
    authDomain: "construapp-v1.firebaseapp.com",
    databaseURL: "https://construapp-v1.firebaseio.com",
    projectId: "construapp-v1",
    storageBucket: "construapp-v1.appspot.com",
    messagingSenderId: "312248850383"
};
/*autenticacion de usuarios con firebase*/
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

$("#cerrar").click(function logout() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("Total", JSON.stringify(null));
        location.href = "index.html";
    }).catch(function (error) {
        console.log("error para cerrar sesion")
    });
});


// Dom7
var $$ = Dom7;


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Construapp', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'David',
        lastName: 'Velasquez',
        },
       
      // Demo products for Catalog section      
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});



// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

function Agregar () {
   
  var titulo;
  var deposito = document.getElementById("deposito").value;
  var precio = document.getElementById("precio").value;
  var imagen;
  var marca = document.getElementById("marca").value;
  var peso = document.getElementById("peso").value;
  var tipo = "Bulto";
  titulo="Cemento "+peso+"kg";
  if(deposito=="San Pio")imagen="img/sanPio.jpg";
  else if(deposito=="Para Construir")imagen="img/paraConstruir.jpg";
  else if(deposito=="Paris")imagen="img/parisD.jpg";
  else imagen="img/"+deposito.toLowerCase()+".jpg";

  
  db.collection('cemento').add({
      titulo: titulo,
      deposito: deposito,
      tipo: tipo,
      precio: precio,       
      imgP: imagen,
      marca: marca,
      peso: peso
      });
      window.alert("Producto Agregado");
      
};



   





