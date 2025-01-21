<template>
  <div class="container-lostanimals">
    <h1>Mascotas que quieren volver a casa</h1>
    <div class="select-cities">
      <select name="city" id="city">
        <!-- Pendiente de API-->
        <option value="laspalmas">Las Palmas de G.C.</option>
        <option value="telde">Telde</option>
        <option value="sanmateo">San Mateo</option>
        <option value="maspalomas">Maspalomas</option>
      </select>
    </div>
    <div class="lost-animal-cards">
      <LostCard v-for="post in posts" :posts="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query } from "firebase/firestore";
import LostCard from "../components/elements/LostCardElement.vue";
import { db } from "../firebase";

export default {
  name: 'LostAnimalsView',
  components: {
    LostCard,
  },
  data() {
    return {
      posts: []
    };
  },
  firestore() {
    return {
      posts: collection(db, 'posts')
    }
  },
  async mounted() {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);

    const values = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    this.posts = values;
  }
};
</script>

<style scoped>

.container-lostanimals{
  background: var(--color-azul-claro);
  display : grid;
  justify-items: center;
  font-family: Montserrat, sans-serif;
  & h1{
    margin : 50px 0;
    color: var(--color-celeste);
    filter: drop-shadow(0 0 0.2rem rgb(18, 99, 109));
    font-size: 2.5rem;
  }
  & .select-cities {
    display: grid;
    justify-content: end;

    & select {
    background-color: var(--color-celeste);
    font-family: Montserrat, sans-serif;
    border-radius : 5px;
    width: 200px;
    text-align: center;
    }
  }

}
.lost-animal-cards {
  width : 1400px;
  display : grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin : 30px;
}

</style>
