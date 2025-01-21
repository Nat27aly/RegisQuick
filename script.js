const BASE_URL = 'http://localhost/m06/';

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            input.classList.add("touched");
        });
    });
});

//La función dentro de addEventListener se ejecutará cada vez que ocurra el evento "input".
document.getElementById("password2").addEventListener("input", function () {
    //"input" permite validar mientras el usuario escribe
    const password = document.getElementById("password").value;
    //this hace referencia al elemento que disparó el evento, en este caso, el campo con id="password2".
    const password2 = this.value;

    if (password !== password2) {
        this.setCustomValidity("Las contraseñas no coinciden");
    } else {
        this.setCustomValidity(""); // Limpia el mensaje si coinciden
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const registration = document.getElementById("registration-form");

    registration.addEventListener("submit", (event) => {
        if (!validForm()) {
            event.preventDefault();
        } else {
            event.preventDefault();
            // Desactivamos los inputs y el boton y mostramos un mensaje de carga

            // Aqui se lanza el fetch al backend con la info del form
             registerUser();
        }
    })
})

// Hay 2 validaciones, una es en tiempo real dínamica, y la otra es onSubmit

//Password
var passwordInput = document.getElementById("password");
var lowerLetter = document.getElementById("lowerLetter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

passwordInput.onfocus = function () {
    document.getElementById("message")
}

passwordInput.onkeyup = function () {
    // Validación de letra minúscula
    /*g significa "global", lo que indica que la búsqueda debe realizarse
    en toda la cadena de texto y no detenerse en el primer match.*/
    var lowerCase = /[a-z]/g;
    if (passwordInput.value.match(lowerCase)) {
        lowerLetter.classList.remove("invalid");
        lowerLetter.classList.add("valid");
    } else {
        lowerLetter.classList.remove("valid");
        lowerLetter.classList.add("invalid")
    }

    // Validación de letra mayuscula
    var upperCaseLetters = /[A-Z]/g;
    if (passwordInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validación numbers
    var numbers = /[0-9]/g;
    if (passwordInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (passwordInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function validForm() {

    var valid = true;

    const userName = document.getElementById("username").value.trim();
    const surName = document.getElementById("surname").value.trim();
    const userMail = document.getElementById("userEmail").value.trim();
    const userPass = document.getElementById("password").value;
    const userPass2 = document.getElementById("password2").value;

    // Validación Nombre
    const regexName = /^[a-zA-Z\s]+$/;

    if (!regexName.test(userName) || userName === "") {
        alert("El nombre solo debe contener letras.")
        valid = false;
    }

    // Validación del Apellido

    const regexSurname = /^[a-zA-Z\s]+$/;

    if (!regexSurname.test(surName) || surName === "") {
        alert("El apllido solo debe contener letras.")
        valid = false;
    }

    //Validación de Email

    if (userMail === "") {
        alert("Debe introducir el Email");
        valid = false;
    }

    //Validación Contraseña
    if (userPass !== userPass2) {
        alert("Las contraseñas no coinciden");
        valid = false;
    }

    return valid;
}
function registerUser() {

    // Preparamos los datos para enviar
    const registrationForm = document.getElementById("registration-form");


    const configForm = {
        method: 'POST',
        body: new FormData(registrationForm)
    };

    // Hacemos la petición al servidor local
    fetch(`${BASE_URL}user_register.php`, configForm)
        .then(response => {
            // Verificamos si pudimos conectar con el servidor
            if (!response.ok) {
                throw new Error('No se pudo conectar con el servidor local');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.location.href = `${BASE_URL}${data.redirect}`;
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error: Verifica que el servidor local esté funcionando');
        });
}



