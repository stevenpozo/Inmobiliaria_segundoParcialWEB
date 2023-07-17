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