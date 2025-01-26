<template>
  <div class="privacidad-container">
    <h1 class="main-title">Política de Privacidad</h1>
    <p>
      Tu privacidad es importante para nosotros. A continuación, te explicamos cómo manejamos tu información:
    </p>
    <ul>
      <li>🔒 Nunca compartimos tus datos personales sin tu consentimiento.</li>
      <li>🔒 Solo almacenamos la información estrictamente necesaria para ofrecerte el mejor servicio.</li>
      <li>🔒 Puedes solicitar la eliminación de tus datos en cualquier momento.</li>
    </ul>
  </div>
</template>

<style scoped>
.privacidad-container {
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: var(--color-celeste);
  font-family: 'Montserrat', sans-serif;
  color: var(--color-azul-oscuro);
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-azul-medio);
  text-align: center;
}
ul {
  margin-top: 20px;
  list-style-type: none;
  padding: 0px 50px 0px 150px;
}
p{
  padding: 0px 50px 0px 80px;
}
li {
  font-size: 1.2rem;
  margin: 10px 0;
}
</style>
