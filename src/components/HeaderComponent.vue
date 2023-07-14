<template>
    <v-app-bar app color="info" primary>
        <v-btn text small to="/">Home</v-btn>
        <v-btn text small to="/matchs">Partidos</v-btn>
        <v-btn text small to="/table">Tablas de posiciones</v-btn>
        <v-btn text small to="/stats">Estadisticas</v-btn>

        <v-spacer></v-spacer>
        <span class="secondary-text">{{ nombreUser }}</span>
    </v-app-bar>
</template>

<script>
    export default {
        computed: {
            nombreUser() {
                return this.$store.getters.nombreInverso
            }
        }
    }
</script>