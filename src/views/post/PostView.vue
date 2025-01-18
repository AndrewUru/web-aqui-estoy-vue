<template>
  <div>
    <Header />
    <main>
      <div class="lost-animal-post">
        <PostView :post="post" />
      </div>
    </main>
    <FooterHero />
  </div>
</template>

<script>
import postDataRaw from "../../data/post.json";

export default {
  name: 'PostViewPage',
  props: ['id'],  // Recibe el parámetro id
  mounted() {
    console.log(this.id); 
  },
  data() {
    return {
      post: null,
    };
  },
  created() {
    const postData = Array.isArray(postDataRaw) ? postDataRaw : [postDataRaw];
    const id = this.$route.params.id;
    console.log('Post ID:', id);  // Verifica que la ID se captura bien
    this.post = postData.find((p) => p.id === parseInt(id));

    if (!this.post) {
      console.error("Post no encontrado.");
      return;
    }
  }
};
</script>

<style scoped>
@import "../../assets/base.css";
</style>
