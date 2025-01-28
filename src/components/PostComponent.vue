<template>
  <main>
    <div class="post">
      <div class="pet-info">
        <img :src="post.URLImage" :alt="post.name" />
        <div class="pet-details">
          <h2>{{ post.name }}</h2>
          <p>
            <strong>Perdido en {{ post.municipality }}, en la localidad de {{ post.city }}.</strong>
            <strong>En la calle {{ post.street }}.</strong>
            <br />
            Última vez visto el {{ post.date }}
          </p>
          <p class="contact">Contacto: {{ post.contact }}</p>
          <p>{{ post.description }}</p>
          <p v-if="isReward"><strong>Se ofrece recompensa de {{ post.reward }}</strong></p>
          <p>Publicado por: <strong>{{ post.author }}</strong></p>
        </div>
      </div>
      <div class="comments-section">
        <h3>Comentarios:</h3>
        <CommentsSectionElement :comments="post.comments" :postId="post.id" />
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
  font-family: Montserrat, sans-serif;
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
import CommentsSectionElement from './elements/CommentsSectionElement.vue';


export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isReward: false,
    }
  },
  components: {
    CommentsSectionElement
  },
  mounted() {
    console.log("esta es la recompensa " + this.post.reward);
    if (this.post.reward) {
      this.isReward = true;
    }
  }
}
</script>
