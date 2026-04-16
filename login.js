import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    message.textContent = "Completa todos los campos.";
    message.style.color = "red";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    message.textContent = "Inicio de sesión exitoso.";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } catch (error) {
    console.error("Error al iniciar sesión:", error);

    if (error.code === "auth/invalid-email") {
      message.textContent = "Correo inválido.";
    } else if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      message.textContent = "Correo o contraseña incorrectos.";
    } else {
      message.textContent = "No se pudo iniciar sesión.";
    }

    message.style.color = "red";
  }
});