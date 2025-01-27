<template>
    <div class="modal">
        <div class="modal-contenido">
            <form action="">
                <label for="">Nombre:
                    <input type="text" v-model="name">
                </label>
                <label for="">Ubicación:
                    <input type="text" v-model="location">
                </label>
                <button @click="saveData()" class="btn-aceptar">Aceptar</button>
            </form>

        </div>
    </div>
</template>


<script>
import { db } from "@/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";


export default {
    data() {
        return {
            name: this.user.name,
            location: this.user.location,
        }
    },
    props: ["user"],
    emits: ["accept"],
    methods: {
        async saveData() {
            // TODO update user data
            const users = doc(db, "users", this.user.uid);
            // Set the "capital" field of the city 'DC'
            await setDoc(users, {
                name: this.name,
                location: this.location
            });
            this.$emit('accept');
        }
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