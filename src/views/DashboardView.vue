<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {

  },
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Dashboard</h1>
      </v-col>
    </v-row>
  </v-container>
</template>
