<template>
  <div class="split-screen">
    <div class="left-side">
      <h1>Tu comunidad,<br> su camino a casa</h1>
      <h2>
        Conecta, busca, y encuentra a tu mascota perdida mientras construimos
        una comunidad solidaria
      </h2>
      <img :src="petLogin" alt="Man pet a dog" />
    </div>
    <div class="right-side">
      <AuthForm :isLogin="isLogin" @login="login" @register="register" />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthFormComponent.vue';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { toast } from 'vue3-toastify';
import { collection, doc, setDoc } from 'firebase/firestore';

export default {

  name: 'AuthView',
  components: {
    AuthForm,
  },
  data() {
    return {
      isLogin: false,
      petLogin: "/images/petLogin.svg"
    }
  },
  methods: {
    async login(login) {
      try {
        await signInWithEmailAndPassword(auth, login.email, login.password)
        this.$router.push({ name: 'home' })


      } catch (Error) {
        console.log(Error);
        toast("Contraseña o correo incorrecto", {
          "theme": "colored",
          "type": "error",
          "transition": "flip",
          "dangerouslyHTMLString": true
        })

      }
    },
    async register(login) {
      try {
        const register = await createUserWithEmailAndPassword(auth, login.email, login.password)
        if (register.user.uid) {

          setDoc(doc(db, "users", `${register.user.uid}`), {
            createdAt: new Date(),
            email: login.email,
          })

          this.$router.push({ name: 'home' })

        }

      } catch (Error) {
        console.log(Error);
        toast("Hay ocurrido un error: `${Error}`", {
          "theme": "colored",
          "type": "error",
          "transition": "flip",
          "dangerouslyHTMLString": true
        })
      }
    }
  },
  mounted() {
    this.isLogin = this.$route.name === 'login';

    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        console.log("Usuario autenticado", user.uid)
      } else {
        console.log("Usuario no autenticado")
      }
      console.log("auth", auth.currentUser)
    })
  },
  watch: {
    $route(to) {
      this.isLogin = to.name === 'login';
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: auto;
}

.split-screen {
  min-height: calc(100dvh - var(--header-height));
  display: flex;
}

.left-side,
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-side {
  background-color: var(--color-celeste);
  color: var(--color-azul-oscuro);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.left-side h1 {
  font-size: 2.5rem;
  font-family: "Luckiest Guy", system-ui;
  letter-spacing: 2px;
}

.left-side h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: Montserrat, sans-serif;
}

.right-side {
  background-color: var(--color-azul-claro);
}

img {
  width: 50%;
  height: auto;
}
</style>
