<template>
  <div class="split-screen">
    <div class="left-side">
      <h1>Tu comunidad, su camino a casa.</h1>
      <h2>
        Conecta, busca, y encuentra a tu mascota perdida mientras construimos
        una comunidad solidaria.
      </h2>
    </div>
    <div class="right-side">
      <AuthForm :isLogin="isLogin" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Importa useRoute para acceder a la ruta actual
import { ref, watch } from 'vue'; // Importa ref y watch para manejar reactividad
import AuthForm from '@/components/AuthFormComponent.vue';

const route = useRoute();  // Accede al objeto de la ruta actual
const isLogin = ref(route.name === 'login');  // Usamos ref para ser reactivo

// Reaccionamos a los cambios de la ruta
watch(() => route.name, (newRoute) => {
  isLogin.value = newRoute === 'login';  // Actualizamos isLogin cuando la ruta cambie
});
</script>

<style scoped>
/* Estilos globales de la vista */
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
  color: var(--color-azul-oscu ro);
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
