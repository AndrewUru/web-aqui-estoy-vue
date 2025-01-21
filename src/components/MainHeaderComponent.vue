<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="nav-container">
    <nav class="header-left">
      <p>¡AQUÍ ESTOY!</p>
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/lost-animals">En búsqueda</RouterLink>
        <RouterLink to="/found-animals">Encontrados</RouterLink>
        <RouterLink to="/about">Sobre nosotras ...</RouterLink>
      </div>
    </nav>

    <nav class="header-right">
      <RouterLink to="/form-lost-animal">Crear publicación</RouterLink>
      <RouterLink class="button-login" to="/login">Acceder</RouterLink>
      <RouterLink class="button-register" to="/register">Registrarse</RouterLink>
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
  justify-content: start;
  background-color: var(--color-azul-oscuro);
  padding: 10px 20px;

  height: var(--header-height);
}

.nav-links,
.header-right {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 0;
}

.nav-links a,
.header-right a {
  color: var(--color-celeste);
  text-decoration: none;
  padding: 3px 6px;
}

.nav-links a:hover,
.header-right a:hover {
  text-decoration: underline;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-left p {
  color: var(--color-celeste);
  font-family: "Luckiest Guy", system-ui;
  font-size: 20px;
  margin: 0;
  width: 150px;
}


.header-left p {
  color: var(--color-celeste);
  font-family: "Luckiest Guy", system-ui;
  font-size: 20px;
}


.button-login,
.button-register {
  display: flex;
  border-radius: 5px;
  color: var(--color-azul-oscuro);
  background-color: var(--color-azul-claro);
  height: 30px;
  width: 90px;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.2rem rgb(18, 99, 109));
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

/* Responsivo para pantallas medianas 
@media (max-width: 1024px) {
  .nav-links {
    gap: 30px;
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
}*/
</style>
