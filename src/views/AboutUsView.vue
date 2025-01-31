<template>
  <div class="about-page">
    <div class="about-header">
      <h1>Sobre Nosotras</h1>
      <p>Conoce el proyecto y lo que hemos aprendido al hacerlo.</p>
    </div>
    <div class="about-content">
      <section class="project-info">
        <h2>🐾¿Qué es ¡Aquí estoy!?🐾</h2>
        <p>
          ¡Aquí estoy! es una aplicación creada con el objetivo de ayudar a reunir a los animales perdidos con sus
          dueños. Permite a los usuarios crear anuncios para buscar a sus mascotas perdidas, unirse a la búsqueda de
          otros animales y ofrecer ayuda en horarios específicos. Este proyecto nace para hacer de la comunidad una red
          de apoyo, ayudando a todos los animales a regresar a su hogar lo más rápido posible.
        </p>
        <div class="features">
          <h3>Características:</h3>
          <ul>
            <li>📝 Crear anuncios para mascotas perdidas.</li>
            <li>🐾 Unirse a la búsqueda de otros animales.</li>
            <li>🧑‍🤝‍🧑 Comunidad unida: colaboración entre personas.</li>
          </ul>
        </div>
      </section>
      <section class="team">
        <h2>¿Quiénes somos?👩🏽‍💻👩🏻‍💻</h2>
        <p>
          Somos un grupo de apasionados por la tecnología y el bienestar animal. A lo largo de este proyecto, hemos
          aprendido cómo desarrollar una aplicación que no solo resuelve un problema real, sino que también fomenta el
          trabajo en equipo, la colaboración y la ayuda mutua entre los miembros de la comunidad.
        </p>
        <p>
          Como estudiantes de Front-End, este proyecto nos ha permitido poner en práctica todo lo aprendido: desde el
          diseño de interfaces intuitivas hasta la implementación de funcionalidades complejas y el desarrollo de una
          experiencia de usuario fluida.
        </p>
      </section>
      <section class="what-we-learned">
        <h2>Lo que hemos aprendido 🧠</h2>
        <p>
          Durante el desarrollo de <b>¡Aquí estoy!</b>, hemos adquirido valiosas habilidades en:
        </p>
        <ul>
          <li>🎨 Diseño de interfaces accesibles y atractivas.</li>
          <li>💻 Desarrollo web con tecnologías modernas como Vue, JavaScript, html y CSS.</li>
          <li>👥 Trabajo colaborativo usando GitHub y Trello.</li>
          <li>🏙️ Implementación de un enfoque centrado en el usuario y la comunidad.</li>
        </ul>
      </section>
    </div>
    <div class="about-footer">
      <p>Gracias por ser parte de esta comunidad.<br> Juntos podemos hacer una gran diferencia.</p>
      <br>
      <div class="contact-founder">
        <p id="tittle-contact">LinkedIn, GitHub y correo!!!</p>
        <div class="founder-container">
          <p class="founder-name">Fundadora Violeta</p>
          <p>vioeasd@gmail.com</p>
          <a href="https://www.linkedin.com/in/vio-bobis-santana/">LinkedIn</a>
          <br>
          <a href="https://github.com/vio-debug">Github</a>
        </div>

        <br>
        <div class="founder-container">
          <p class="founder-name">Fundadora Zeida</p>
          <p>zeidaromen@outlook.es</p>
          <a href="https://www.linkedin.com/in/zeida-de-los-reyes-rodr%C3%ADguez-mendoza/">LinkedIn</a>
          <br>
          <a href="https://github.com/Zeida">Github</a>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  background-color: var(--color-celeste);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat, sans-serif;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px;
}

.about-header,
.about-footer {
  font-family: "Luckiest Guy", cursive;
  text-align: center;
}

.about-header h1 {
  font-size: 48px;
  color: var(--color-azul-oscuro);
}

.about-header p,
.about-footer p {
  font-size: 18px;
  color: var(--color-azul-claro);
}

.about-content {
  margin-top: 20px;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 25px;
  color: var(--color-azul-oscuro);
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  font-size: 15px;
  margin: 5px 0;
}

.features {
  font-size: 18px;
}

p {
  font-size: 15px;
  line-height: 1.6;
}



#tittle-contact {
  font-size: 20px;
  color: var(--color-celeste);
}

.contact-founder {

  & .founder-container {
    padding-bottom: 10px;
    margin-top: 10px;
    background-color: var(--color-azul-oscuro);
    color: white;
    border-radius: 10px;
    text-align: center;

  }

  & .founder-name {
    font-size: 18px;
    color: rgb(99, 141, 225);
  }

  & a,
  p {
    font-size: 15px;
    color: var(--color-celeste);
  }
}
</style>
