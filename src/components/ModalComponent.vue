<template>
  <div class="modal">
    <div class="modal-contenido">
      <h2 class="modal-titulo">{{ title }}</h2>
      <p>{{ content }}</p>
      <button @click="$emit('accept');" class="btn-aceptar">Aceptar</button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  emits: ["accept"]
}
</script>


<style>
.btn-abrir-modal {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-toggle {
  display: block;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal-contenido {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  transform: scale(0.7);
  transition: transform 0.3s ease;
}

.modal-titulo {
  margin-top: 0;
}

.btn-aceptar {
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}
</style>
