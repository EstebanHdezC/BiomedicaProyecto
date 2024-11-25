// scripts.js

function login() {
    const usernameOrEmail = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (usernameOrEmail && password) {
        // Aquí puedes implementar la lógica para comparar los datos ingresados con los almacenados.
        alert(`Iniciando sesión con usuario o correo: ${usernameOrEmail}`);

        // Almacenar el nombre de usuario/correo en el almacenamiento local
        localStorage.setItem('usernameOrEmail', usernameOrEmail);

        // Redirigir a la página de bienvenida
        window.location.href = 'welcome.html';
    } else {
        alert('Por favor, ingresa tu usuario/correo y contraseña.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (username && email && password) {
        alert(`Usuario registrado exitosamente: ${username}`);

        // Guardar los datos del usuario en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Limpiar los campos del formulario
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';

        // Redirigir a la página de login
        window.location.href = 'login.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function logout() {
    // Redirigir a la página de login cuando el usuario cierre sesión
    window.location.href = 'login.html';
}

function navigateTo(page) {
    // Redirigir a la página especificada
    window.location.href = page;
}

function loadWelcomeMessage() {
    // Obtener el nombre de usuario almacenado en el almacenamiento local
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').innerText = `¡Bienvenido, ${username}!`;
    } else {
        // Si no hay nombre de usuario, redirigir al login
        window.location.href = 'login.html';
    }
}

function loadMedicalRecords() {
    // Datos preestablecidos que simulan registros médicos desde la "base de datos"
    const medicalRecords = [
        { fecha: "24/11/2024 8:04hrs" },
        { fecha: "25/11/2024 10:15hrs" },
        { fecha: "26/11/2024 14:30hrs" }
    ];

    // Referencia al tbody donde se agregarán las filas
    const recordsTable = document.getElementById("recordsTable");

    // Llenar la tabla con los datos preestablecidos
    medicalRecords.forEach(record => {
        const row = document.createElement("tr");

        // Columna de fecha
        const fechaCol = document.createElement("td");
        fechaCol.textContent = record.fecha;
        row.appendChild(fechaCol);

        // Columna de botón ingresar
        const buttonCol = document.createElement("td");
        const button = document.createElement("button");
        button.className = "ingresar-button";
        button.textContent = "INGRESAR";
        button.onclick = openMetricsModal; // Asignar la función para abrir el modal
        buttonCol.appendChild(button);
        row.appendChild(buttonCol);

        // Agregar la fila a la tabla
        recordsTable.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Cargar el mensaje de bienvenida si existe la página de bienvenida
    if (document.getElementById('welcomeMessage')) {
        loadWelcomeMessage();
    }

    // Cargar registros médicos si se encuentra en la página correspondiente
    if (document.getElementById('recordsTable')) {
        loadMedicalRecords();
    }
});
// scripts.js

// scripts.js

function loadMedicalRecords() {
    // Datos preestablecidos consistentes que simulan registros médicos de una misma persona
    const medicalRecords = [
        {
            fecha: "24/11/2024 8:04hrs",
            bpmReposo: 72,
            bpmActividad: 110,
            spo2: 98,
            temperatura: 36.5,
            peso: 70.2,
            altura: 175,
            vam: 46
        },
        {
            fecha: "25/11/2024 10:15hrs",
            bpmReposo: 73,
            bpmActividad: 112,
            spo2: 98,
            temperatura: 36.6,
            peso: 70.1,
            altura: 175,
            vam: 46
        },
        {
            fecha: "26/11/2024 14:30hrs",
            bpmReposo: 72,
            bpmActividad: 111,
            spo2: 97,
            temperatura: 36.5,
            peso: 70.0,
            altura: 175,
            vam: 47
        },
        {
            fecha: "27/11/2024 09:00hrs",
            bpmReposo: 71,
            bpmActividad: 109,
            spo2: 98,
            temperatura: 36.4,
            peso: 70.0,
            altura: 175,
            vam: 46
        },
        {
            fecha: "28/11/2024 16:00hrs",
            bpmReposo: 73,
            bpmActividad: 113,
            spo2: 98,
            temperatura: 36.7,
            peso: 70.3,
            altura: 175,
            vam: 47
        }
    ];

    // Referencia al tbody donde se agregarán las filas
    const recordsTable = document.getElementById("recordsTable");

    // Llenar la tabla con los datos preestablecidos
    medicalRecords.forEach((record, index) => {
        const row = document.createElement("tr");

        // Columna de fecha
        const fechaCol = document.createElement("td");
        fechaCol.textContent = record.fecha;
        row.appendChild(fechaCol);

        // Columna de botón ingresar
        const buttonCol = document.createElement("td");
        const button = document.createElement("button");
        button.className = "ingresar-button";
        button.textContent = "INGRESAR";

        // Añadir evento click al botón
        button.addEventListener("click", function () {
            // Almacenar el registro en localStorage
            localStorage.setItem('selectedMetrics', JSON.stringify(medicalRecords[index]));

            // Redirigir a la página de métricas (ajusta la ruta si es necesario)
            window.location.href = 'metrics.html'; // Asegúrate de ajustar esta ruta según la ubicación del archivo
        });

        buttonCol.appendChild(button);
        row.appendChild(buttonCol);

        // Agregar la fila a la tabla
        recordsTable.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Cargar registros médicos si se encuentra en la página correspondiente
    if (document.getElementById('recordsTable')) {
        loadMedicalRecords();
    }
});
