<template>
    <v-container class="mt-2">
        <h1 class="title">Partidos</h1>
        {{ valorStore }}
        <v-btn  @click="incrementarPor(6)">Incre</v-btn>
    </v-container>
</template>
<script>
export default {
    computed: {
        valorStore(){
            return this.$store.state.valor
        }
    },
    methods: {
        incrementarPor(numero) {
            this.$store.commit('incrementarPor', numero)
        }
    }
}
</script>