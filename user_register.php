<?php

session_start();

header('Content-Type: application/json');

// Sanitizaremos los datos obtenidos

function sanitize($data){
    $data = trim($data);
    $data = stripcslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $errorsForm = [];

    // Validamos que existan todos los campos necesarios

    if (!isset($_POST['user-name']) || !isset($_POST['last-name']) ||
        !isset($_POST['mail']) || !isset($_POST['password'])) {
        $errorsForm[] = "Faltan campos requeridos";
    } else {

        $username = sanitize($_POST['user-name']);
        $surname = sanitize($_POST['last-name']);
        $email = sanitize($_POST['mail']);
        $password = $_POST['password']; //Sin sanitizar


        // Validación del nombre y apellido (solo letras y espacios)

        if (empty($username) || !preg_match("/^[a-zA-Z\s]+$/", $username)) {
            $errorsForm[] = "El nombre solo puede contener Letras";
        }

        if (empty($surname) || !preg_match("/^[a-zA-Z\s]+$/", $surname)) {
            $errorsForm[] = "El apellido solo debe contener letras";
        }

        // Validación del email
        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errorsForm[] = "Email inválido";
        }
        // Validación de la contraseña (mismas reglas que en el cliente)
        if (!preg_match("/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/", $password)) {
            $errorsForm[] = "La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 6 caracteres";
        }

    }

    // Posterior a la verificación

    if (empty($errorsForm)) {

        // Guardaremos la sessión
        $_SESSION['usuario'] = [
            'username' => $username,
            'surname' => $surname,
            'email' => $email,
            // Momento en el que se crea la session.
            'timeLife' => date('Y-m-d H:i:s')
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Usuario registrado correctamente',
            'redirect' => 'registro_exitoso.php'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => implode(". ", $errorsForm)
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido'
    ]);
}
?>



