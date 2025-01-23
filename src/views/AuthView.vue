<template>
  <div class="split-screen">
    <div class="left-side">
      <h1>Tu comunidad, su camino a casa</h1>
      <h2>
        Conecta, busca, y encuentra a tu mascota perdida mientras construimos
        una comunidad solidaria
      </h2>
    </div>
    <div class="right-side">
      <AuthForm :isLogin="isLogin" @login="login" @register="register" />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthFormComponent.vue';

import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export default {

  name: 'AuthView',
  components: {
    AuthForm,
  },
  data() {
    return {
      isLogin: false,
    }
  },
  methods: {
    async login(login) {
      try {
        console.log(login.email, login.password)
        const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password)
        console.log(userCredential);

        console.log(auth.currentUser);

      } catch (Error) {
        console.log(Error);
      }
    },
    async register(login) {
      try {
        console.log(login.email, login.password)
        const userCredential = await createUserWithEmailAndPassword(auth, login.email, login.password)
        
        console.log(userCredential);

        console.log(auth.currentUser);

      } catch (Error) {
        console.log(Error);
      }
    }
  },
  mounted() {
    this.isLogin = this.$route.name === 'login';

    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        console.log("Usuario autenticado", user.uid)
        this.$router.push({ name: 'home' })
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
.split-screen {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.left-side,
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.left-side {
  background-color: var(--color-celeste);
  color: var(--color-azul-oscuro);
  text-align: center;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url('images/petLogin.svg');
  background-size: cover;
  background-position: center;

}

.left-side h1 {
  font-size: 2.5rem;
  margin-top: 80px;
  margin-bottom: 10px;
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
</style>
