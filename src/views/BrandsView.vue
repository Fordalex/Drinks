<script lang="ts">
import { defineComponent } from 'vue'
import Map from '../components/Map.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Map,
  },
  data() {
    return {
      brands: [] as Array<any>,
      pins: [] as Array<any>,
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
            'https://api.fordsdevelopment.co.uk/brands',
          )}`,
        )
        this.brands = await response.json()
      } catch (error) {
        console.error('Error fetching brands:', error)
      }
    },
  },
})
</script>

<template>
  <Map :pins="pins" />
  <main>
    <div v-if="brands.length > 0" class="row m-0 g-2 p-2">
      <div v-for="(brand, index) in brands" :key="index">{{ brand.name }}</div>
    </div>
    <p v-else>Loading brands...</p>
  </main>
</template>
