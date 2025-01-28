<template>
  <div class="modal">
    <div class="modal-contenido">
      <form>
        <label for="">Nombre:
          <input type="text" v-model="name">
        </label>
        <label for="">Ubicación:
          <input type="text" v-model="location">
        </label>
        <button type="button" @click="saveData()" class="btn-aceptar">Aceptar</button>
      </form>

    </div>
  </div>
</template>


<script>
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";


export default {
  data() {
    return {
      name: this.user?.name ?? "",
      location: this.user?.location ?? "",
    }
  },
  props: ["user"],
  emits: ["accept"],
  methods: {
    async saveData() {

      const users = doc(db, "users", this.user.uid);

      await setDoc(users, {
        name: this.name,
        location: this.location,
        email: this.user?.email ?? "",
        createdAt: this.user?.createdAt ?? new Date()
      });
      this.$emit('accept');
    }
  },
  mounted() {
    console.log("papi", this.user)
    this.name = this.user.name;
    this.location = this.user.location;
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  height: 100px;
}

label {
  color: black;
}
</style>
