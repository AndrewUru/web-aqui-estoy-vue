<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 - ¡Aquí Estoy!</title>
    </head>
    <div class="svg-container">
      <svg
        class="animated"
        id="freepik_stories-404-error-with-a-cute-animal"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        version="1.1"
        style="width: 40%; height: auto;"
      >
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
  components: {
  },
};
</script>

<style scoped>
.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
svg#freepik_stories-404-error-with-a-cute-animal {
  max-width: 100%;
  height: auto;
}
svg#freepik_stories-404-error-with-a-cute-animal:not(.animated) .animable {
  opacity: 0;
}
svg#freepik_stories-404-error-with-a-cute-animal.animated #freepik--Text--inject-96 {
  animation: 1.5s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
  animation-delay: 0s;
}
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

