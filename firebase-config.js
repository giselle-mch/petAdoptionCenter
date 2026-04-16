// Importaciones desde CDN (IMPORTANTE: no uses npm aquí)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración (ya está correcta)
const firebaseConfig = {
  apiKey: "AIzaSyD0rZbA7jIJwcRsWivQM4jIfSIRhRQePXI",
  authDomain: "tiendademascotas-baaf3.firebaseapp.com",
  projectId: "tiendademascotas-baaf3",
  storageBucket: "tiendademascotas-baaf3.firebasestorage.app",
  messagingSenderId: "112477153475",
  appId: "1:112477153475:web:5ebad0592cc01698a5da76",
  measurementId: "G-92M0HQ48RS"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar autenticación
const auth = getAuth(app);

// Exportar
export { auth };