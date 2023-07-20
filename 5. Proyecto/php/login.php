<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Abre el archivo en modo lectura
    $file = fopen("usuarios.txt", "r");
    
    // Recorre el archivo línea por línea
    while (($line = fgets($file)) !== false) {
        // Divide la línea en usuario y contraseña
        list($storedUsername, $storedPassword) = explode(':', $line);
        
        // Verifica si el usuario y la contraseña coinciden
        if (trim($username) === trim($storedUsername) && trim($password) === trim($storedPassword)) {
            echo "Inicio de sesión exitoso. ¡Bienvenido, $username!";
            exit;
        }
    }
    
    echo "Inicio de sesión fallido. Por favor, verifica tus credenciales.";
    
    // Cierra el archivo
    fclose($file);
}
?>
