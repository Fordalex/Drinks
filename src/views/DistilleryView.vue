<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import Spirit from '../components/Spirit.vue'
import Map from '../components/Map.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      distillery: {} as any,
      pins: [] as Array<any>,
    }
  },
  components: {
    Spirit,
    Map,
  },
  mounted() {
    this.fetchDistillery()
  },
  methods: {
    async fetchDistillery() {
      const route = useRoute()
      const id = route.params.id
      const accessTokenStore = useAccessTokenStore()
      const apiUrl = `${import.meta.env.VITE_API_URL}/distilleries/${id}`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })
      this.distillery = await response.json()
    },
  },
})
</script>

<template>
  <main>
    <div v-if="distillery?.id" class="row m-0 g-2 p-2">
      <h1>{{ distillery.name }}</h1>
      <img :src="distillery.image_link" :alt="distillery.name" class="whisky-image" />
    </div>
    <p v-else>Loading distillery...</p>
    <div v-if="distillery.spirits?.length > 0" class="row m-0 g-2 p-2">
      <Spirit v-for="(spirit, index) in distillery.spirits" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading spirits...</p>
  </main>
</template>
