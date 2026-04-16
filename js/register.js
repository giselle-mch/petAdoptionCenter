import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    message.textContent = "Todos los campos son obligatorios.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "La contraseña debe tener al menos 6 caracteres.";
    message.style.color = "red";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name
    });

    message.textContent = "Usuario registrado correctamente.";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);

  } catch (error) {
    console.error("Error al registrar:", error);

    if (error.code === "auth/email-already-in-use") {
      message.textContent = "Ese correo ya está registrado.";
    } else if (error.code === "auth/invalid-email") {
      message.textContent = "El correo no es válido.";
    } else if (error.code === "auth/weak-password") {
      message.textContent = "La contraseña es demasiado débil.";
    } else {
      message.textContent = "No se pudo registrar el usuario.";
    }

    message.style.color = "red";
  }
});