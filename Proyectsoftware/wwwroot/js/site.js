document.getElementById("register-form").addEventListener("submit", function (event) {
    let valid = true;

    // Limpiar los mensajes de error previos
    document.querySelectorAll(".error-message").forEach(function (element) {
        element.style.display = "none";
    });

    // Validación para el campo nombre
    const nombre = document.getElementById("nombre");
    if (!nombre.value) {
        document.getElementById("nombre-error").textContent = "El nombre es obligatorio.";
        document.getElementById("nombre-error").style.display = "block";
        valid = false;
    }

    // Validación para el campo email
    const email = document.getElementById("email");
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById("email-error").textContent = "Por favor ingresa un correo electrónico válido.";
        document.getElementById("email-error").style.display = "block";
        valid = false;
    }

    // Validación para el campo password
    const password = document.getElementById("password");
    if (!password.value || password.value.length < 6) {
        document.getElementById("password-error").textContent = "La contraseña debe tener al menos 6 caracteres.";
        document.getElementById("password-error").style.display = "block";
        valid = false;
    }

    // Si alguna validación falla, evitar el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});



////////////////////////////////////////////////////////////////////////////////


function validarCamposLogin() {
    // Limpiar los mensajes de error previos
    document.querySelectorAll(".error-message").forEach(function (element) {
        element.style.display = "none";
    });

    let valid = true;

    // Validación para el campo de usuario
    const username = document.getElementById("username");
    if (!username.value) {
        document.getElementById("username-error").textContent = "El nombre de usuario es obligatorio.";
        document.getElementById("username-error").style.display = "block";
        valid = false;
    }

    // Validación para el campo de contraseña
    const password = document.getElementById("password");
    if (!password.value) {
        document.getElementById("password-error").textContent = "La contraseña es obligatoria.";
        document.getElementById("password-error").style.display = "block";
        valid = false;
    }

    // Si alguna validación falla, evitar el envío del formulario
    if (valid) {
        // Aquí puedes enviar el formulario o hacer la autenticación
        window.location.href = "/Home/Home";  // Redirigir si todo es válido
    }
}
