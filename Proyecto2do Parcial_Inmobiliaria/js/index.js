
document.addEventListener('DOMContentLoaded', function () {
  var linkRegistro = document.getElementById('text_registro');
  linkRegistro.addEventListener('click', function (e) {
    e.preventDefault();

    $('#myModal').modal('hide');

    setTimeout(function () {
      $('#myModal1').modal('show');
    }, 300); // Ajusta el valor del retraso según sea necesario
  });

  var closeButton = document.querySelector('#myModal1 .close');

  // Agrega un evento de clic al botón "X"
  closeButton.addEventListener('click', function () {
    // Recarga la página
    location.reload();
  });
});



/*cargar htmls*/

function cargarCasas() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Casas.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarDepa() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Departamentos.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarTerreno() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/terrenos.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarContactos() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Contactos.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarInicio() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Inicio.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarAlquiler() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/depa_alquiler.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarSomos() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/informacion.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}



// Función para mostrar el mensaje en un alert y actualizar el enlace "Acceder"
function mostrarMensaje(data) {
  if (data.success) {
    alert(data.message);
    if (data.username) {
      // Guardamos el nombre de usuario en el almacenamiento local del navegador
      localStorage.setItem('username', data.username);

      // Actualizamos el enlace "Acceder" con el nombre de usuario
      var accederLink = document.getElementById('iniciar_sesion');
      accederLink.textContent = data.username;
    }
    // No recargamos la página, ya que hemos actualizado el nombre de usuario
  } else {
    alert(data.message);
  }
}




// Función para mostrar el mensaje en un alert y actualizar el enlace "Acceder"
function mostrarMensaje(data) {
  if (data.success) {
    alert(data.message);
    if (data.username) {
      localStorage.setItem('username', data.username);
      $('#myModal').modal('hide');
      location.reload();
    }
  } else {
    alert(data.message);
  }
}

// Espera a que el documento esté cargado
document.addEventListener('DOMContentLoaded', function () {
  var linkRegistro = document.getElementById('text_registro');
  linkRegistro.addEventListener('click', function (e) {
    e.preventDefault();
    $('#myModal').modal('hide');

    setTimeout(function () {
      $('#myModal1').modal('show');
    }, 300); // Ajusta el valor del retraso según sea necesario
  });

  var formLogin = document.getElementById('formulario2');

  formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('php/login.php', {
      method: 'POST',
      body: new FormData(formLogin)
    })
      .then(response => response.json())
      .then(data => mostrarMensaje(data))
      .catch(error => console.error('Error:', error));
  });

  var storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    // Actualizamos el enlace "Acceder" con el nombre de usuario almacenado
    var accederLink = document.getElementById('iniciar_sesion');
    accederLink.textContent = storedUsername;
  }
});


(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = ()=>{
      listElements.forEach(element =>{
          element.addEventListener('click', ()=>{

              
              let subMenu = element.children[1];
              let height = 0;
              element.classList.toggle('menu__item--active');


              if(subMenu.clientHeight === 0){
                  height = subMenu.scrollHeight;
              }

              subMenu.style.height = `${height}px`;

          });
      });
  }

  const deleteStyleHeight = ()=>{
      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('menu__item--active');
          }

      });
  }


  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();
          if(list.classList.contains('menu__links--show'))
              list.classList.remove('menu__links--show');

      }else{
          addClick();
      }
  });

  if(window.innerWidth <= 800){
      addClick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();


