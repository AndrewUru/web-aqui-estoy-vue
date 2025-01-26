<template>
  <div class="faq-container">
    <h1 class="main-title">Preguntas Frecuentes</h1>
    <div class="faq-item" v-for="faq in faqs" :key="faq.id">
      <h2>{{ faq.question }}</h2>
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    id: 1,
    question: "¿Cómo puedo reportar que mi mascota se ha perdido?",
    answer: "Es muy fácil. Regístrate, haz clic en 'Crear publicación' y rellena el formulario. Pronto recibirás la ayuda de la comunidad."
  },
  {
    id: 2,
    question: "¿Qué hacer si encuentro una mascota?",
    answer: "Sigue los mismos pasos que para reportar una mascota perdida. Sube una foto, incluye detalles y entre todos haremos el resto para encontrar a sus dueños."
  },
  {
    id: 3,
    question: "¿Qué hacer si ya mi mascota volvió a casa?",
    answer: "En  la publicación puedes marcar que ya ha aparecido y opcionalmente añadir un comentario para que todos tengamos una nueva noticia feliz."
  }
];
</script>

<style scoped>
.faq-container {
  padding: 20px;
  background-color: var(--color-azul-claro);
  font-family: 'Montserrat', sans-serif;
  color: var(--color-celeste);
  height: calc(100vh - 50px);

}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 2px;
}
.faq-item {
  margin-top: 20px;
  padding: 20px 40px 0px;
}
.faq-item h2 {
  font-size: 1.3rem;
  color: var(--color-azul-oscuro);
}
.faq-item p {
  font-size: 1rem;
  color: var(--color-celeste);
}
</style>
