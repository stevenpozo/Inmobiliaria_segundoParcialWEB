<!DOCTYPE html>
<html>

<head>
    <title>Tabla de Usuarios Registrados</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];

        // Lee el archivo de usuarios existente
        $users = file("usuarios.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        // Verifica si el correo o el nombre de usuario ya están registrados
        foreach ($users as $user) {
            list($existingUsername, $existingPassword, $existingEmail) = explode(':', $user);
            if ($username === $existingUsername) {
                die("El nombre de usuario '$username' ya ha sido registrado. Intente con otro.");
            }
            if ($email === $existingEmail) {
                die("El correo electrónico '$email' ya ha sido registrado. Intente con otro.");
            }
        }

        // Abre el archivo en modo escritura y crea uno nuevo si no existe
        $file = fopen("usuarios.txt", "a");

        // Escribe los datos en el archivo
        fwrite($file, $username . ":" . $password . ":" . $email . "\n");

        // Cierra el archivo
        fclose($file);

        // Mostrar solo el usuario registrado en la tabla
        echo "<h2>Tabla de Usuarios Registrados</h2>";
        echo "<table>";
        echo "<tr><th>Nombre de Usuario</th><th>Contraseña</th><th>Email</th></tr>";
        echo "<tr><td>$username</td><td>$password</td><td>$email</td></tr>";
        echo "</table>";
    }
    ?>
</body>

</html>
