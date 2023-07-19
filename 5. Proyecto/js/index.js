// JavaScript Document
 // Espera a que el documento esté cargado
 document.addEventListener('DOMContentLoaded', function() {
  // Obtén el enlace de "Registrarse"
  var linkRegistro = document.getElementById('text_registro');

  // Agrega un evento de clic al enlace
  linkRegistro.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que se siga el enlace

    // Cierra el modal de login
    $('#myModal').modal('hide');

    // Abre el modal de registro después de un breve retraso para permitir que el modal de login se cierre completamente
    setTimeout(function() {
      $('#myModal1').modal('show');
    }, 300); // Ajusta el valor del retraso según sea necesario
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
  fetch('html/somos.html')
      .then(response => response.text())
      .then(data => {
          // Insertamos el contenido en el div del index.html
          document.getElementById('index').innerHTML = data;

          // Ocultamos el div "index"
          //document.getElementById('index').classList.add('hidden');
      })
      .catch(error => console.log(error));
}

