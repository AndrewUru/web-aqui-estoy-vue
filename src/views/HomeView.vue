<template>
  <div>
    <MainHero />
    <FooterHero />
  </div>
</template>

<script>
import MainHero from "../components/MainComponent.vue";
import FooterHero from "../components/FooterComponent.vue";
import {auth} from '../firebase.js';

export default {
  name: 'IndexView',
  components: {
    MainHero,
    FooterHero,
  },
  mounted(){
    setTimeout(() => {
      console.log("auth ", auth.currentUser);
    }, 1000);
    console.log("auth ", auth.currentUser);
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
