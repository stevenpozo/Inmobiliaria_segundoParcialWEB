<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Tabla de Contactos</title>
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
    <h2>Tabla de Contactos</h2>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Mensaje</th>
        </tr>
        <tr>
            <td><?php echo $nombre; ?></td>
            <td><?php echo $telefono; ?></td>
            <td><?php echo $mensaje; ?></td>
        </tr>
    </table>
</body>

</html>
