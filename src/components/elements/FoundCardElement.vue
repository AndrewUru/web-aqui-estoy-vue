<template>
  <div class="foundanimal-card">
    <div class="head-card">
      <h2>{{ posts.name }}</h2>
    </div>
    <img class="contain pet-img" :src="posts.URLImage" alt="Imagen de la mascota">
    <div class="footer-card">
      <div class="footer-container">
        <img class="icon" src="@/assets/FlagWaving.svg" alt="Ubicación Icono" />
        <p>{{ posts.street }}</p>
      </div>
      <div class="footer-container">
        <img class="icon" src="@/assets/ClockIcon.svg" alt="Fecha perdida Icono" />
        <p>Perdido: {{ posts.dateLost }}</p>
      </div>
      <div class="footer-container">
        <img class="icon" src="@/assets/ClockIcon.svg" alt="Fecha encontrado Icono" />
        <p>Encontrado: {{ posts.dateFound }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  padding-right: 5px;
  height: 20px;
  width: 20px;
}
.foundanimal-card {
  filter: drop-shadow(0 0 0.1rem rgb(150, 150, 150));
  margin: 0 60px 30px 60px;
  font-family: Montserrat, sans-serif;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 350px;
  max-height: 600px;
  background-color: var(--color-celeste);
  & .head-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
  }
  & h2 {
    margin: 10px;
    font-size: 20px;
  }
  & .found-badge {
    background-color: var(--color-azul-oscuro);
    color: white;
    font-size: 0.8rem;
    padding: 5px 5px;
    border-radius: 15px;
  }
  & .pet-img {
    max-width: 100%;
    height: 250px;
    object-fit: cover;
  }
  & .footer-card {
    margin: 0px 15px;
    & .footer-container {
      display: flex;
      align-items: center;
      &.clock {
        margin-bottom: 0;
      }
    }
  }
}
</style>

<script setup>
defineProps({
  posts: {
    type: Object,
    required: true
  }
});
</script>
