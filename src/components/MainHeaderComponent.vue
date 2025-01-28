<script>

import { RouterLink } from 'vue-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';


export default {
  name: 'HeaderComponent',
  components: {
    RouterLink,
  },
  data() {
    return {
      isLogin: false,
      currentUser: {}
    }
  },
  beforeMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario autenticado", user.uid);
        this.currentUser = user;
        this.isLogin = true;
      } else {
        console.log("Nos quedamos solitos");
      }
    })
  },
  methods: {
    logout() {
      signOut(auth)
      console.log("adiós, pero no se sabe cuando te vas");
      this.isLogin = false;
      this.$router.push({ name: 'home' });
    }
  }
}

</script>

<template>
  <div class="nav-container">
    <nav class="header-left">

      <div class="nav-links">
        <RouterLink to="/">
          <p>¡AQUÍ ESTOY!</p>
        </RouterLink>
        <RouterLink to="/lost-animals">En búsqueda</RouterLink>
        <RouterLink to="/found-animals">Encontrados</RouterLink>
        <RouterLink to="/about">Sobre nosotras ...</RouterLink>
      </div>
    </nav>

    <nav class="header-right">
      <RouterLink v-if="!isLogin" class="button-auth" to="/login">Acceder</RouterLink>
      <RouterLink v-if="!isLogin" class="button-auth" to="/register">Registrarse</RouterLink>
      <RouterLink v-if="isLogin" class="button-profile" to="/profile">
        <h2 v-if="isLogin">{{ currentUser.email }}</h2>
      </RouterLink>
      <RouterLink v-if="isLogin" to="/form-lost-animal" class="button-auth">Crear publicación</RouterLink>
      <RouterLink v-if="isLogin" @click="logout" class="button-auth logout" to="/home">Cerrar Sesión</RouterLink>
    </nav>

    <button class="menu-toggle" aria-label="Abrir menú">
      ☰
    </button>
  </div>
</template>

<style scoped>
.nav-container {
  font-family: Montserrat, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-azul-oscuro);
  padding: 10px 20px;
  position: relative;
  height: var(--header-height);
}

.nav-links,
.header-right {
  display: flex;
  gap: 30px;
  align-items: center;
  color: var(--color-azul-oscuro);
}

.nav-links a,
.header-right a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover,
.header-right a:hover {
  text-decoration: underline;
}

.header-left {
  display: flex;
  align-items: center;
  /* Centra verticalmente el contenido */
  gap: 20px;
  /* Espaciado entre los elementos */
}

.header-left p {
  color: var(--color-celeste);
  font-family: "Luckiest Guy", system-ui;
  font-size: 20px;
  margin: 0;
}

.button-auth {
  display: flex;
  border-radius: 5px;
  color: var(--color-azul-oscuro);
  background-color: var(--color-azul-claro);
  padding: 10px;
  height: 25px;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.2rem rgb(16, 83, 89));
}

.logout {
  font-family: Montserrat, sans-serif;
  background-color: #731212;
  filter: none;
}

.button-register {
  width: 110px;
  color: var(--color-azul-oscuro);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-celeste);
  cursor: pointer;
}

/* Responsivo para pantallas pequeñas */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links,
  .header-right {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color: var(--color-azul-oscuro);
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    padding: 20px;
    height: 40vh;
    z-index: 2;
  }

  .nav-links.active,
  .header-right.active {
    display: flex;
  }

  .header-left {
    flex-direction: column;
    gap: 10px;
    color: var(--color-celeste);
  }

  .nav-links a,
  .header-right a {
    text-align: center;
  }
}

.button-profile h2 {
  font-size: 16px;
}

/* Responsivo para pantallas medianas */
@media (max-width: 1024px) {
  .nav-links {
    gap: 20px;
  }

  .header-right {
    gap: 20px;
  }

  .button-login,
  .button-register {
    height: 25px;
    width: 80px;
  }

  .button-register {
    width: 100px;
  }
}
</style>
