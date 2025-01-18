<script>

import instructionsData from "../../data/instructions.json";

export default {
  data() {
    return {
      instruction: instructionsData, // Aquí puedes poner un valor por defecto o cargar los datos de alguna fuente
    };
  },
};

</script>

<template>
  <div class="card">
    <div v-if="instruction">
      <h2>{{ instruction.title }}</h2>
      <p>{{ instruction.description }}</p>
    </div>
    <div v-else>
      <p>Sin datos disponibles.</p>
    </div>
  </div>
</template>

<style>
.card {
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  height: 290px;
  width: 340px;
  overflow: hidden;
  border-radius: 50px;
  background-color: var(--color-azul-medio);
  justify-content: space-around;
  align-items: center;
  color: var(--color-celeste);
  text-align: center;
  padding: 5px;
}

.card h2 {
  font-size: 25px;
  margin: 20px 20px 0px 20px;
}

.card p {
  font-size: 18px;
  padding: 10px;
  padding-top: 0;
  margin-top : 0;
}

</style>