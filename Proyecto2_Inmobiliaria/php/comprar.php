<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtén los datos del formulario
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $cedula = $_POST["cedula"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  // Configura la instancia de PHPMailer
  $mail = new PHPMailer(true);

  // Configuración del servidor SMTP
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com'; 
  $mail->SMTPAuth = true;
  $mail->Username = 'stevenpozo0999@gmail.com';
  $mail->Password = 'sgegiqkxufgggeoz';
  $mail->SMTPSecure = 'tls'; 
  $mail->Port = 587; 

  // Direcciones de envío y remitente
  $mail->setFrom('stevenpozo0999@gmail.com', $nombre); // Cambia esto por la dirección y nombre del remitente
  $mail->addAddress('stevenpozo0999@gmail.com', 'Steven Pozo'); // Cambia esto por la dirección del destinatario

  // Contenido del correo electrónico
  $mail->Subject = "Datos de: $nombre";
  $mail->Body = "Nombre: $nombre\nTeléfono: $telefono\nCédula: $cedula\nEmail: $email\nMensaje:\n$mensaje";

  // Intentar enviar el correo electrónico
  try {
    $mail->send();
    echo "<script>alert('¡Gracias! Su formulario ha sido enviado correctamente.');</script>";
} catch (Exception $e) {
    echo "<script>alert('Hubo un error al enviar el correo electrónico: {$mail->ErrorInfo}');</script>";
}
}
?>
