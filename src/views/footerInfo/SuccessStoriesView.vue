<template>
  <div class="exito-container">
    <h1 class="main-title">Casos de Éxito</h1>
    <div class="casos-list">
      <div class="caso" v-for="caso in casos" :key="caso.id">
        <img class="caso-img" :src="caso.image" :alt="caso.title" />
        <div class="caso-content">
          <h2>{{ caso.title }}</h2>
          <p>{{ caso.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const casos = [
  {
    id: 1,
    title: "Luna encontró su hogar",
    description: "Después de semanas desaparecida, Luna volvió a casa gracias a nuestra comunidad.",
    image: "/images/guineapigfound.jpg"
  },
  {
    id: 2,
    title: "Max y su final feliz",
    description: "Max estaba perdido en un parque, pero fue identificado gracias a nuestra app.",
    image: "/images/hedgehogfound.jpg"
  }
];
</script>

<style scoped>
.exito-container {
  padding: 20px;
  background-color: var(--color-celeste);
  font-family: 'Montserrat', sans-serif;
  height: calc(100vh - 60px);
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-azul-medio);
  text-align: center;
}
.casos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.caso {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.caso-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.caso-content {
  padding: 15px;
}
.caso-content h2 {
  font-size: 1.2rem;
  color: var(--color-azul-oscuro);
}
.caso-content p {
  font-size: 1rem;
  color: var(--color-azul-medio);
}
</style>
