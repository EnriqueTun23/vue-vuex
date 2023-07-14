<template>
  <v-app>

    
      <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',

  components: {
    'app-header': HeaderComponent,
  },

  data: () => ({
    //
  }),
};
</script>
