function abrirLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// cerrar si clic fuera
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// LOGIN
function abrirLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// cerrar si clic fuera
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// CAMBIAR A REGISTER
function mostrarRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

// CAMBIAR A LOGIN
function mostrarLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// LOGIN
function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
        localStorage.setItem("token", "abc123");
        alert("Login correcto");
        cerrarLogin();
    } else {
        alert("Credenciales incorrectas");
    }
}

// REGISTER
function register() {
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        alert("Campos vacíos");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Usuario registrado correctamente");

    mostrarLoginForm();
}

function adoptar() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Debes iniciar sesión primero");
        abrirLogin();
        return;
    }

    alert("¡Adopción iniciada!");
}