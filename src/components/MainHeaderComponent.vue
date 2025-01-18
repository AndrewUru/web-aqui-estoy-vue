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

<style>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}
.nav-links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}
.button-login, .button-register {
  margin-left: 1rem;
}
</style>
