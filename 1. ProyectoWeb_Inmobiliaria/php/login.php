<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $file = fopen("usuarios.txt", "r");
    
    while (($line = fgets($file)) !== false) {
        list($storedUsername, $storedPassword) = explode(':', $line);
        
        if (trim($username) === trim($storedUsername) && trim($password) === trim($storedPassword)) {
            session_start();
            $_SESSION['username'] = $username;
            echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso. ¡Bienvenido, $username!", "username" => $username]);
            exit;
        }
    }
    echo json_encode(["success" => false, "message" => "Inicio de sesión fallido. Por favor, verifica tus credenciales."]);
    fclose($file);
}
?>
