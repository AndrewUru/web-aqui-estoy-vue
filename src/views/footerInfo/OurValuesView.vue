<template>
  <div class="valores-container">
    <h1 class="main-title">Nuestros Valores</h1>
    <div class="valores-list">
      <div class="valor">
        <h2>💖 Amor por las Mascotas</h2>
        <p>Creemos que cada mascota merece un hogar lleno de amor y cuidados.</p>
      </div>
      <div class="valor">
        <h2>🙌 Comunidad y Colaboración</h2>
        <p>Juntos podemos marcar la diferencia uniendo esfuerzos y recursos.</p>
      </div>
      <div class="valor">
        <h2>🌍 Inclusión y Empatía</h2>
        <p>Valoramos a todas las personas y sus historias, fomentando el respeto mutuo.</p>
      </div>
      <div class="valor">
        <h2>🛠️ Innovación</h2>
        <p>Utilizamos la tecnología para mejorar y facilitar la búsqueda de mascotas.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.valores-container {
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
.valores-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}
.valor h2 {
  font-size: 1.5rem;
  color: var(--color-azul-oscuro);
}
.valor p {
  font-size: 1rem;
  color: var(--color-azul-medio);
}
</style>
