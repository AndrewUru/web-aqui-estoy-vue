<template>
  <div>
    <MainHero />
    <InstructionsHero />
    <TestimonialsHero />
    <FooterHero />
  </div>
</template>

<script>
import MainHero from "../components/MainComponent.vue";
import TestimonialsHero from "../components/TestimonialsComponent.vue";
import InstructionsHero from "../components/InstructionsComponent.vue";
import FooterHero from "../components/FooterComponent.vue";

export default {
  name: 'IndexView',
  components: {
    MainHero,
    TestimonialsHero,
    InstructionsHero,
    FooterHero,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
