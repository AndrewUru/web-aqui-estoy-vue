<template>
  <div class="landing-page-3">
    <div class="title">
      <h2>Creíamos que el sofá nunca volvería a tener pelos...</h2>
    </div>
    <div class="testimonials">
      <TestimonyCard v-for="testimony in testimonials" :key="testimony.testimonyHead.nameAgePet"
        :testimony="testimony" />
    </div>
    <div class="text-end">
      <h2>...pero ¡aquí estoy! nos regaló un final feliz</h2>
    </div>
  </div>
</template>

<script>
import TestimonyCard from "./elements/TestimonialCardElement.vue";
import testimonials from "../data/testimonials.json";

export default {
  components: {
    TestimonyCard
  },
  data() {
    return {
      testimonials
    };
  }
};
</script>

<style scoped>
/* Contenedor principal para las tarjetas de testimonio */
.landing-page-3 {
  display: flex;
  flex-direction: column;
  background: var(--color-azul-claro);
  align-items: center;
  padding: 20px 100px 20px 100px;
}

/* Título de la sección */
.tittle {
  font-size: 30px;
  font-style: italic;
  display: 1;
  width: 100%;
  justify-content: flex-start;
  margin: 20px;
  color: var(--color-celeste);
}

/* Contenedor de testimonios */
.testimonials {
  width: 100%;
  height: auto;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  display: flex;
}

.text-end {
  font-size: 30px;
  width: 100%;
  text-align: right;
  margin: 20px;
  color: var(--color-celeste);
}
</style>
