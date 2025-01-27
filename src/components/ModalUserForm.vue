<template>
    <div class="modal">
        <div class="modal-contenido">
            <form action="">
                <label for="">Nombre:
                    <input type="text">
                </label>
                <label for="">Email:
                    <input type="email">
                </label>
                <label for="">Ubicación:
                    <input type="text">
                </label>
                <button @click="$emit('accept');" class="btn-aceptar">Aceptar</button>
            </form>

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
    emits: ["accept"],
    methods: {

    }
}
</script>