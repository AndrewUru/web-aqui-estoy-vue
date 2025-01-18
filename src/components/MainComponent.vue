<template>
  <div class="landing-page-1">
    <img :src="girlCatIcon" alt="" />
    <div class="container-rigth-side">
      <h1>TRAEMOS A TU <span>MASCOTA</span> DE VUELTA</h1>
      <div id="container-light-blue">
        <div class="elements-container">
          <h2 class="text-inside-absolute">
            Conéctate con otros para encontrar mascotas
          </h2>
          <h2>pérdidas o ayudar a otros a encontrar las suyas</h2>
          <h3>¡Juntos podemos lograrlo!</h3>
          <button type="button">ÚNETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { annotate } from "rough-notation";

export default {
  data() {
    return {
      girlCatIcon: "/icons/girl_with_cat.svg" // Ruta relativa desde la carpeta public
    };
  },
  mounted() {
    const petSpan = this.$el.querySelector("h1 span");
    const annotation = annotate(petSpan, { type: "underline", color: 'red' });

    petSpan.addEventListener("mouseenter", () => { annotation.show() }, { once: true });
  }
};
</script>
