<script lang="ts">
import { defineComponent } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
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
    this.fetchBrands()
  },
  methods: {
    async fetchBrands() {
      try {
        const accessToken = useAccessTokenStore()
        const apiUrl = `https://api.fordsdevelopment.co.uk/drinks/brands`
        if (!accessToken) {
          console.error('No access token available')
          return
        }

        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })

        this.brands = await response.json()
      } catch (error) {
        console.error('Error fetching brands:', error)
      }
    },
  },
})
</script>

<template>
  <main>
    <div v-if="brands.length > 0" class="row m-0 g-2 p-2">
      <div v-for="(brand, index) in brands" :key="index">{{ brand.name }}</div>
    </div>
    <p v-else>Loading brands...</p>
  </main>
</template>
