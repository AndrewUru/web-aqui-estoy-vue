<template>
  <div class="container-lostanimals">
    <h1>Mascotas que quieren volver a casa</h1>
    <div class="select-cities">
      <select v-model="city" name="city" id="city">
        <!-- Pendiente de API-->
        <option value="agaete">Agaete</option>
        <option value="aguimes">Agüimes</option>
        <option value="artenara">Artenara</option>
        <option value="arucas">Arucas</option>
        <option value="firgas">Firgas</option>
        <option value="galdar">Gáldar</option>
        <option value="ingenio">Ingenio</option>
        <option value="la-aldea-de-san-nicolas">La Aldea de San Nicolás</option>
        <option value="las-palmas">Las Palmas de G.C.</option>
        <option value="mogan">Mogán</option>
        <option value="moya">Moya</option>
        <option value="san-bartolome-de-tirajana">San Bartolomé de Tirajana</option>
        <option value="san-mateo">San Mateo</option>
        <option value="santa-lucia-de-tirajana">Santa Lucía de Tirajana</option>
        <option value="santa-brigida">Santa Brígida</option>
        <option value="santa-maria-de-guia">Santa María de Guía</option>
        <option value="tejeda">Tejeda</option>
        <option value="telde">Telde</option>
        <option value="teror">Teror</option>
        <option value="valleseco">Valleseco</option>
        <option value="valsequillo">Valsequillo</option>
      </select>
    </div>
    <div class="lost-animal-cards">
      <LostCard v-for="post in posts" :posts="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query, where } from "firebase/firestore";
import LostCard from "../components/elements/LostCardElement.vue";
import { db } from "../firebase";

export default {
  name: 'LostAnimalsView',
  components: {
    LostCard,
  },
  data() {
    return {
      posts: [],
      city: '',
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
  },
  watch: {
    city: async function () {
      console.log(this.city);
      const q = query(collection(db, "posts"), where('municipality', '==', this.city));
      const querySnapshot = await getDocs(q);

      const values = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      this.posts = values;
    }
  }
};
</script>

<style scoped>
.container-lostanimals {
  background: var(--color-azul-claro);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Montserrat, sans-serif;
  min-height: 100vh;
  padding: 10px 20px;
  overflow: hidden;

  & h1 {
    margin: 10px 0;
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
      border-radius: 5px;
      width: 200px;
      text-align: center;
    }
  }

}

.lost-animal-cards {
  width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin: 30px;
}
</style>
