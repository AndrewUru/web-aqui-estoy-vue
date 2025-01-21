<template>
  <main>
    <div class="post">
      <div class="pet-info">
        <img :src="post.image" :alt="post.name" />
        <div class="pet-details">
          <h2>{{ post.name }}</h2>
          <p>
            <strong>Perdido en {{ post.location }}</strong>
            <br />
            Última vez visto el {{ post.date }}
          </p>
          <p class="contact">Contacto: {{ post.contact }}</p>
          <p>{{ post.description }}</p>
          <p><strong>Se ofrece recompensa de {{ post.reward }}</strong></p>
          <p>Publicado por: <strong>{{ post.author }}</strong></p>
        </div>
      </div>
      <div class="comments-section">
        <h3>Comentarios:</h3>
        <!-- <CommentsSection :comments="post.comments" /> -->
      </div>
    </div>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: var(--color-celeste);
}

main {
  max-width: 800px;
  margin: 20px auto;
  background: white;
  border-radius: 10px;

  padding: 20px;
}

.pet-info {
  display: flex;
  padding: 20px;
  gap: 20px;
  background-color: var(--color-azul-oscuro);
  border-radius: 10px;
}

.pet-info img {
  width: 350px;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
}

.pet-details {
  flex: 1;
  color: white;
}

.pet-details h2 {
  margin: 0;
}

.pet-details p {
  margin: 5px 0;
}

.pet-details .contact {
  margin: 10px 0;
  font-weight: bold;
}
</style>

<script>
// import { CommentsSection } from "../elements";

export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    // CommentsSection
  }
}
</script>
