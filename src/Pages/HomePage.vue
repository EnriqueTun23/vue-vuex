<template>
  <v-container class="mt-2">
    <h1 class="title">Home Copa</h1>
    <h3 class="caption1">Frutas y verduras</h3>
    <v-divider class="my-3" />
    <!-- <v-btn class="accent" @click="incrementar">Incrementar</v-btn>
        {{ valorStore }} -->
    <v-row>
      <v-col class="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo A</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="e in grupoA" :key="e.id">
                <v-avatar color="blue" size="48" class="mr-3">
                  <span class="white--text">{{ e.code }}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ e.team }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo B</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="e in grupoB" :key="e.id">
                <v-avatar color="blue" size="48" class="mr-3">
                  <span class="white--text">{{ e.code }}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ e.team }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo C</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="e in grupoC" :key="e.id">
                <v-avatar color="blue" size="48" class="mr-3">
                  <span class="white--text">{{ e.code }}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ e.team }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo D</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="e in grupoD" :key="e.id">
                <v-avatar color="blue" size="48" class="mr-3">
                  <span class="white--text">{{ e.code }}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ e.team }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    valorStore() {
      return this.$store.state.valor;
    },
    equipos() {
      return this.$store.getters.getTeams;
    },
    grupoA() {
      return this.$store.getters.getTeamByGroup(1);
    },
    grupoB() {
      return this.$store.getters.getTeamByGroup(2);
    },
    grupoC() {
      return this.$store.getters.getTeamByGroup(3);
    },
    grupoD() {
      return this.$store.getters.getTeamByGroup(4);
    },
  },
  methods: {
    incrementar() {
      // const payload = {
      //     numero: 5,
      //     nombre: 'fulano',
      // }
      this.$store.dispatch("prueba2", 5);
    },
  },
};
</script>
