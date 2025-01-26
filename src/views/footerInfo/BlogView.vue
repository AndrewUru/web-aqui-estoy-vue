<template>
  <div class="blog-container">
    <h1 class="main-title">Blog</h1>
    <h3>Proximamente...</h3>
    <div class="articles">
      <div class="article" v-for="article in articles" :key="article.id">
        <img class="article-img" :src="article.image" :alt="article.title" />
        <h2>{{ article.title }}</h2>
        <p>{{ article.excerpt }}</p>
        <router-link :to="`/blog/${article.id}`" class="read-more">Leer más</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    id: 1,
    title: "Consejos para encontrar a tu mascota",
    excerpt: "Aquí te damos algunos tips efectivos para localizar a tu mascota rápidamente.",
    image: "/images/TipsFound.jpg"
  },
  {
    id: 2,
    title: "Historias de reencuentros",
    excerpt: "Conoce los momentos más emotivos que nuestra comunidad ha vivido.",
    image: "/images/FoundPet.jpeg"
  }
];
</script>

<style scoped>
.blog-container {
  padding: 20px;
  background-color: var(--color-azul-claro);
  font-family: 'Montserrat', sans-serif;
  height: calc(100vh - 60px);
}
.main-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5rem;
  color: var(--color-celeste);
  text-align: center;
}
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.article {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.article-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.article h2 {
  font-size: 1.2rem;
  color: var(--color-azul-oscuro);
  padding: 10px;
}
.article p {
  font-size: 1rem;
  color: var(--color-azul-medio);
  padding: 0 10px;
}
.read-more {
  display: block;
  padding: 10px;
  text-align: right;
  color: var(--color-azul-medio);
  font-weight: bold;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
</style>
