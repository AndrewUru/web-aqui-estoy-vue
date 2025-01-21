<template>
  <div>
    <Header />
    <main>
      <div v-if="post" class="lost-animal-post">
        <PostComponent :post="post" />
      </div>
    </main>
    <FooterHero />
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";
import postDataRaw from "../../data/post.json";

export default {
  name: 'PostViewPage',
  mounted() {
    console.log(this.id);
  },
  components: {
    PostComponent
  },
  data() {
    return {
      post: null,
    };
  },
  created() {

    const postData = postDataRaw
    const id = this.$route.params.id;
    console.log('Post ID:', id);  // Verifica que la ID se captura bien
    console.log(postData)
    this.post = postData.find((p) => p.id == id);

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
