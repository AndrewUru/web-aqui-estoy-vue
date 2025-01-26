<template>
  <div class="funciona-container">
    <h1 class="main-title">Cómo Funciona</h1>
    <div class="steps">
      <div class="step" v-for="step in steps" :key="step.id">
        <h2>{{ step.title }}</h2>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    id: 1,
    title: "📢 Reporta una mascota",
    description: "Registra los detalles de la mascota perdida o encontrada con fotos y ubicación."
  },
  {
    id: 2,
    title: "📡 Conecta con la comunidad",
    description: "Nuestra comunidad verá la publicación y podrá ayudarte a buscar."
  },
  {
    id: 3,
    title: "🏠 Reencuentros felices",
    description: "Facilitamos que las mascotas vuelvan a casa rápidamente."
  }
];
</script>

<style scoped>
.funciona-container {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-celeste);
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-azul-medio);
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step h2 {
  font-size: 1.5rem;
  color: var(--color-azul-oscuro);
}
.step p {
  font-size: 1rem;
  color: var(--color-azul-medio);
}
</style>
