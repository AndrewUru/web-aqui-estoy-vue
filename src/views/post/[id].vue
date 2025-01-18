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
  data() {
    return {
      post: null,
    };
  },
  created() {
    const postData = Array.isArray(postDataRaw) ? postDataRaw : [postDataRaw];
    const id = this.$route.params.id;
    this.post = postData.find((p) => p.id === id);

    if (!this.post) {
      throw new Error("Post no encontrado.");
    }
  },
};
</script>

<style scoped>
@import "../../styles/base.css";
</style>

