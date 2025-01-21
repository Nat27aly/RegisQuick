# RegisQuick

## Descripción
RegisQuick es una aplicación web para el registro de usuarios. Incluye validación del lado del cliente y del servidor, con un diseño limpio y una experiencia de usuario fluida.

## Contenido del proyecto

- **registro.html**: Formulario principal de registro de usuarios.
- **registro_exitoso.php**: Página que confirma el registro exitoso y muestra los detalles del usuario.
- **script.js**: Lógica del cliente para validación de datos y manejo del formulario.
- **style.css**: Estilos para el diseño visual de la aplicación.
- **user_register.php**: Script del servidor para procesar y validar los datos del formulario.
- **img/**: Carpeta con recursos gráficos (como el logo de la aplicación).

## Requisitos

1. **Servidor web**: Apache, Nginx u otro servidor con soporte para PHP.
2. **Navegador moderno**: Compatible con las últimas versiones de Chrome, Firefox, o Edge.

## Instalación

1. Descarga y descomprime el proyecto.
2. Coloca los archivos en el directorio de tu servidor web.
3. Abre `registro.html` desde el navegador.

## Flujo de trabajo

1. El usuario completa el formulario en `registro.html`.
2. Se realiza validación del cliente (JavaScript) y se envía la información al servidor mediante `fetch`.
3. El servidor valida los datos con `user_register.php` y guarda la información en una sesión.
4. Si el registro es exitoso, redirige a `registro_exitoso.php` para mostrar los datos registrados.

## Tecnologías utilizadas

- HTML5, CSS3
- JavaScript (Vanilla)
- PHP

## Autor
Nataly Vanessa Porras Bonilla
