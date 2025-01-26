<template>
  <div class="contacto-container">
    <h1 class="main-title">Contacto</h1>
    <p>¿Tienes preguntas o comentarios? ¡Estamos aquí para ayudarte!</p>
    <form class="contact-form">
      <input type="text" placeholder="Tu nombre" />
      <input type="email" placeholder="Tu correo electrónico" />
      <textarea placeholder="Tu mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.contacto-container {
  padding: 20px 180px 0 180px;
  height: calc(100vh - 60px);
  background-color: var(--color-celeste);
  font-family: 'Montserrat', sans-serif;
  color: var(--color-azul-oscuro);
  text-align: center;
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-azul-medio);
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
input,
textarea {
  padding: 10px;
  border: 1px solid var(--color-azul-oscuro);
  border-radius: 5px;
  font-size: 1rem;
}
button {
  padding: 10px;
  background-color: var(--color-azul-medio);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
button:hover {
  background-color: var(--color-azul-oscuro);
}
</style>
