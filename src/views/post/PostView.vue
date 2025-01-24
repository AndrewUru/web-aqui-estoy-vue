<template>
  <div>
    <Header />
    <main>
      <button @click="getDataGrandchild"></button>
      <div v-if="post" class="lost-animal-post">
        <PostComponent :post="post" />
      </div>
    </main>
    <FooterHero />
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";
import { db } from "@/firebase";
import { doc, getDoc, collection, query, onSnapshot } from "firebase/firestore";

export default {
  name: 'PostViewPage',
  async mounted() {

    const docRef = doc(db, "posts", `${this.$route.params.id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log("DOC ID", this.$route.params.id)
      this.post = {
        id: this.$route.params.id,
        ...docSnap.data(),
        comments: [] // si lo consigue!
      }
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    // obtengo aqui los comentarios de este POST
    // this.post.comments = [estos comentarios de firebase]
    const docRefComment = collection(doc(db, 'posts', this.$route.params.id), 'comments');
    console.log("¿que es esto? ==>   " + docRefComment);
    const q = query(docRefComment);
    onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({ id: doc.id, ...doc.data() });
      });
      this.post.comments = comments;
    });


  },
  components: {
    PostComponent
  },
  data() {
    return {
      post: null,
    };
  },
  methods: {

  },
  created() {

    // const postData = postDataRaw
    // const id = this.$route.params.id;
    // console.log('Post ID:', id);  // Verifica que la ID se captura bien
    // console.log(postData)
    // this.post = postData.find((p) => p.id == id);

    // if (!this.post) {
    //   console.error("Post no encontrado.");
    //   return;
    // }


  }
};
</script>

<style scoped>
@import "../../assets/base.css";

button {
  height: 40px;
  width: 40px;
}
</style>
