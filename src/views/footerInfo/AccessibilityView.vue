<template>
  <div class="accesibilidad-container">
    <h1 class="main-title">Accesibilidad</h1>
    <p>
      En nuestra web nos comprometemos a garantizar que todas las personas puedan
      acceder a nuestros servicios, independientemente de sus capacidades.
    </p>
    <ul>
      <li>✔️ Compatibilidad con lectores de pantalla.</li>
      <li>✔️ Colores contrastados para mejorar la visibilidad.</li>
      <li>✔️ Textos claros y tamaño ajustable.</li>
    </ul>
  </div>
</template>

<style scoped>
.accesibilidad-container {
  padding: 20px;
  background-color: var(--color-celeste);
  font-family: 'Montserrat', sans-serif;
  color: var(--color-azul-oscuro);
  text-align: center;
  height: calc(100vh - 60px);
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-azul-medio);
}
ul {
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 1.5rem;
  margin: 10px 0;
}
p {
  font-size: 1.3rem;
}
</style>
