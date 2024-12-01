<script lang="ts">
import { defineComponent } from 'vue'
import Spirit from '../components/Spirit.vue'
import Map from '../components/Map.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Spirit,
    Map,
  },
  data() {
    return {
      spirits: [] as Array<any>,
      pins: [
        { lat: 37.7749, lng: -122.4194 }, // San Francisco
        { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        { lat: 40.7128, lng: -74.006 }, // New York City
      ],
    }
  },
  mounted() {
    this.fetchSpirits()
  },
  methods: {
    async fetchSpirits() {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            'https://api.fordsdevelopment.co.uk/spirits',
          )}`,
        )
        this.spirits = await response.json()
      } catch (error) {
        console.error('Error fetching spirits:', error)
      }
    },
  },
})
</script>

<template>
  <Map :pins="pins" />
  <main>
    <div v-if="spirits.length > 0" class="row m-0 g-2 p-2">
      <Spirit v-for="(spirit, index) in spirits" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading spirits...</p>
  </main>
</template>
