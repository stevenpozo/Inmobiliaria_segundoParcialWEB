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

  // Contenido del correo electrónico en formato HTML (factura)
  $mail->Subject = "SweetHouse - Me interesa tu anuncio";
  $mail->IsHTML(true); // Indica que el contenido del correo es en formato HTML

  // Creación del cuerpo del correo en formato HTML
  $mail->Body = '<html>';
  $mail->Body .= '<head><style>table { border-collapse: collapse; } table, th, td { border: 1px solid black; padding: 8px; }</style></head>';
  $mail->Body .= '<body>';
  $mail->Body .= '<h2>Factura de compra</h2>';
  $mail->Body .= '<p><b>Nombre:</b> ' . $nombre . '</p>';
  $mail->Body .= '<p><b>Teléfono:</b> ' . $telefono . '</p>';
  $mail->Body .= '<p><b>Cédula:</b> ' . $cedula . '</p>';
  $mail->Body .= '<p><b>Email:</b> ' . $email . '</p>';
  $mail->Body .= '<p><b>Mensaje:</b></p>';
  $mail->Body .= '<p>' . nl2br($mensaje) . '</p>'; // nl2br() para mantener los saltos de línea

  // Intentar enviar el correo electrónico
  try {
    $mail->send();
    echo "<script>alert('¡Gracias! Su formulario ha sido enviado correctamente.');</script>";
  } catch (Exception $e) {
    echo "<script>alert('Hubo un error al enviar el correo electrónico: {$mail->ErrorInfo}');</script>";
  }
}
?>
