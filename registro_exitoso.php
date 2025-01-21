<?php

session_start();

// Verificamos que existen datos dentro de la funcion

if(!isset($_SESSION['usuario'])){
    header('Location: registro.html');
    exit();
}

$usuario = $_SESSION['usuario'];

?>

<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <title>Registro Exitoso</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="nav-bar">
    <div class="logo-container">
        <img src="img/logo.svg" alt="logo-app">
        <span class="logo-text">RegisQuick</span>
    </div>
</header>

<div class="container">
    <div class="card">
        <h1 class="register-tittle">¡Registro exitoso!</h1>

            <p><b>Nombre:</b> <?php echo htmlspecialchars($usuario['username']); ?></p>
            <p><b>Apellido:</b> <?php echo htmlspecialchars($usuario['surname']); ?></p>
            <p><b>Email:</b> <?php echo htmlspecialchars($usuario['email']); ?></p>
            <p>Fecha de registro:<?php echo htmlspecialchars($usuario['timeLife']); ?></p>


    </div>

</div>

</body>
</html>

<?php
unset($_SESSION['usuario']);
?>