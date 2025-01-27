<template>
  <div class="back-form">
    <div class="form-container">
      <h1>Formulario de búsqueda</h1>
      <p class="text-top"><strong>Cuéntanos todos los detalles sobre tu familiar peludo ...</strong></p>
      <form @submit.prevent="onSubmit">
        <label for="name">Nombre:
          <input type="text" name="name" id="name" v-model="formData.name" required>
        </label>
        <label class="label-group a">Última vez visto</label>
        <label for="date"> <em>Fecha:</em>
          <input type="date" name="date" id="date" v-model="formData.date" required>
        </label>
        <label for="time"><em>Hora:</em>
          <input type="text" placeholder="Ejemplo 00:00" name="time" id="time" v-model="formData.time" required>
        </label>
        <label for="country">País:
          <input type="text" name="country" id="country" v-model="formData.country" required>
        </label>
        <label for="city">Ciudad:
          <input type="text" name="city" id="city" v-model="formData.city" required>
        </label>
        <label for="street">Calle:
          <input type="text" name="street" id="street" v-model="formData.street" required>
        </label>
        <label class="label-group b">Contacto</label>
        <label for="number"><em>Número de teléfono:</em>
          <input type="text" name="number" id="number" v-model="formData.number" required>
        </label>
        <label for="email"><em>Email:</em>
          <input type="text" name="email" id="email" v-model="formData.email" required>
        </label>


        <label for="description">Descripción:
          <input type="text" name="description" id="description" v-model="formData.description">
          <p class="text-form"><strong> Pequeña descripción sobre su compañera/o (datos que puedan
              distinguirle)</strong>
          </p>
        </label>
        <label for="file">Foto:
          <input class="select-file" id="button-file" type="file" name="file" accept="image/*" @change="onFileChange">
          <p class="text-form"><strong>Asegúrese de que se le distinga
              lo mejor posible, una buena foto da más
              oportunidades de encontrarle</strong></p>
        </label>
        <div class="reward-container">
          <label>¿Quiere añadir una recompensa?</label>
          <input type="checkbox" name="reward" id="reward" v-model="isChecked">
          <div v-show="isChecked">
            <input type="text" v-model="formData.reward">
          </div>
        </div>

        <div class="button-submit">
          <button id="form-submit">Finalizar</button>
        </div>

      </form>
      <ModalComponent v-show="alert.title != ''" :title="alert.title" :content="alert.content"
        @accept="acceptModal()" />

    </div>
  </div>
</template>

<script>
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import ModalComponent from '@/components/ModalComponent.vue';

export default {
  data() {
    return {
      isChecked: false,
      alert: {
        title: '',
        content: '',
      },
      formData: {
        name: 'Toby',
        date: '2025-01-01',
        time: '01:01',
        country: 'España',
        city: 'Las Palmas de Gran Canaria',
        street: 'Calle falsa',
        number: '1',
        reward: '',
        email: 'encontrar_a_toby@helpme.com',
        description: 'perdido bla bla bla',
        URLImage: null,
        uid: ''
      },
    }
  },
  components: {
    ModalComponent
  },
  methods: {
    async onSubmit() {
      console.log(this.formData)
      console.log("valor de isChecked: " + this.isChecked);

      const result = await addDoc(collection(db, 'posts'), this.formData)
      console.log("result", result.id)
      this.alert = {
        title: "Se ha creado tu anuncio correctamente",
        content: "Esperamos que pronto recibas noticias de la comunidad y encuentres a tu compañera/o"
      }
    },
    async onFileChange(event) {
      const file = event.target.files[0];
      const formData = new FormData();


      const cloudName = 'dqajwbhnv';
      const uploadPreset = 'aqui_estoy';

      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData
          }
        )

        const result = await response.json();
        this.formData.URLImage = result.secure_url;
        console.log("URL de la imagen subida", result.secure_url);
      } catch (error) {
        console.error('Upload failed', error)
      }
    },

    acceptModal() {
      this.$router.push({ name: 'home' })
    },
    /*formWindow() {
      let newWindow = open("/", "example", "width=300,height=300");
      newWindow.focus();
      alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet
      newWindow.onload = function() {
      let html = `<div style="font-size:30px">Welcome!</div>`;
      newWindow.document.body.insertAdjacentHTML("afterbegin", html);
};*/

  },
  mounted() {

    // this.isLogin = this.$route.name === 'form-lost-animals';

    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        console.log("Usuario autenticado", user.uid)
        this.formData.uid = user.uid;
        // this.$router.push({ name: 'home' })
      } else {
        console.log("Usuario no autenticado")
      }
      console.log("auth", auth.currentUser)
    })

  }
}
</script>

<style scoped>
.back-form {
  background-color: var(--color-azul-claro);
  padding-top: 20px;
  padding-bottom: 60px;
}

.form-container {
  margin: auto;
  background-color: white;
  width: 80%;
  height: 90%;
  padding: 1%;
  padding-bottom: 60px;
  font-family: Montserrat, sans-serif;
  display: grid;
  justify-items: center;
  color: var(--color-azul-oscuro);

  & .text-top {
    padding-bottom: 1rem;
    margin-top: 0;
    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: 400px;
    font-family: Montserrat, sans-serif;
    font-size: 1rem;

    & label {
      display: inline-grid;
      margin-bottom: 1rem;
      color: var(--color-azul-oscuro);

      & input {
        border: 1px solid var(--color-azul-oscuro);
        background: var(--color-celeste);
        height: 25px;
        font-size: 1rem;
        padding: 4px 10px;
        color: var(--color-azul-oscuro);

        &::placeholder {
          color: var(--color-azul-oscuro);
        }
      }
    }

    & .label-group {
      margin-top: 10px;
    }

    & .reward-container {
      margin-bottom: 10px;

      & input {
        margin-bottom: 10px;
      }
    }

    & .text-form {
      font-size: 13px;
    }
  }

  & .button-submit {
    display: flex;
    justify-content: center;

    & #form-submit {
      background-color: var(--color-azul-claro);
      font-family: Montserrat, sans-serif;
      color: var(--color-celeste);
      font-size: 1rem;
      border: 2px var(--color-azul-oscuro);
      filter: drop-shadow(0 0 0.2rem rgb(18, 99, 109));
      padding: 10px;
      border-radius: 10px;
      width: 6rem;
      transition: all 0.3s;

      &:hover {
        background-color: #14466c;
        text-decoration: underline;
      }
    }
  }
}
</style>
