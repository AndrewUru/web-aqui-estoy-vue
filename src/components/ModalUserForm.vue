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