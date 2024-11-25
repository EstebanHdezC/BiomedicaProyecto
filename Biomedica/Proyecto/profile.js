// profile.js

document.addEventListener("DOMContentLoaded", function () {
    loadProfileData();
});

// Cargar los datos del perfil desde el almacenamiento local
function loadProfileData() {
    const username = localStorage.getItem("username") || "Usuario";
    const email = localStorage.getItem("email") || "usuario@example.com";
    const password = localStorage.getItem("password") || "";
    const profileImage = localStorage.getItem("profileImage") || "Proyecto/imagenes/imagen.jpg";

    document.getElementById("username").value = username;
    document.getElementById("email").value = email;

    if (password) {
        document.getElementById("password").value = password;
    }

    // Cargar la imagen de perfil
    document.getElementById("profileImage").src = profileImage;

    // Mostrar botones de imagen según si hay una imagen guardada
    if (profileImage === "Proyecto/imagenes/imagen.jpg") {
        document.getElementById("uploadImageButton").style.display = "block";
        document.getElementById("viewImageButton").style.display = "none";
        document.getElementById("selectNewImageButton").style.display = "none";
    } else {
        document.getElementById("uploadImageButton").style.display = "none";
        document.getElementById("viewImageButton").style.display = "block";
        document.getElementById("selectNewImageButton").style.display = "block";
    }
}

// Cambiar la visibilidad de la contraseña
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

// Cargar la foto de perfil y almacenarla en localStorage
function uploadProfileImage() {
    const fileInput = document.getElementById("fileInput");
    const profileImage = document.getElementById("profileImage");

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
            // Guardar la imagen en localStorage
            localStorage.setItem("profileImage", e.target.result);

            // Actualizar botones para reflejar que ahora hay una imagen guardada
            document.getElementById("uploadImageButton").style.display = "none";
            document.getElementById("viewImageButton").style.display = "block";
            document.getElementById("selectNewImageButton").style.display = "block";
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Función para seleccionar una nueva imagen
function selectImage() {
    document.getElementById("fileInput").click();
}

// Función pa
