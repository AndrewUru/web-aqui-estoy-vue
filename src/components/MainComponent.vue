<template>
  <div class="container">

    <div class="card">
      <img :src="girlDog" alt="Girl Dog" />
      <div class="card-content">
        <h1 class="title">
          {{ currentUser && currentUser.email ? `¡HOLA, ${currentUser.email}!` : '¡HOLA!' }}
        </h1>
        <p class="subtitle">
          Gracias por estar aquí,
          <br />
          recuperemos la alegría del hogar.
        </p>
        <div class="button-group">
          <RouterLink to="/form-lost-animal" class="button">
            Necesito ayuda

          </RouterLink>
          <RouterLink to="/lost-animals" class="button">
            Quiero ayudar

          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';


export default {
  components: {
    RouterLink,
  },
  name: "WelcomeScreen",
  props: {
  },
  data() {
    return {
      girlDog: "/images/girlDog.svg",
      currentUser: null,
      isLogin: false,
    };
  },
  beforeMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario autenticado", user.uid);
        this.currentUser = user;
      } else {
        console.log("Nos quedamos solitos");
      }
    })
  },
  methods: {
    handleHelpNeeded() {
      alert("Redirigiendo a la página de ayuda...");
    },
    handleWantToHelp() {
      alert("Redirigiendo a la página para ayudar...");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #dbeafe;
  font-family: "Luckiest Guy", system-ui;
  letter-spacing: 2px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: row;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 800px;
  max-width: 80%;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-azul);
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #1e40af;
}

.button-group {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button {
  width: 200px;
  padding: 0.75rem;
  background-color: #184690;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
}

.button:hover {
  background-color: #2563eb;
}

img {
  width: 50%;
  height: auto;
}
</style>
