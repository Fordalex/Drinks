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
      companies: [] as Array<any>,
      pins: [] as Array<any>,
    }
  },
  mounted() {
    this.fetchSpirits()
  },
  methods: {
    async fetchSpirits() {
      try {
        const passwordStore = useAccessTokenStore()
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://api.fordsdevelopment.co.uk/drinks/companies?password=${passwordStore.password}`,
          )}`,
        )
        this.companies = await response.json()
      } catch (error) {
        console.error('Error fetching companies:', error)
      }
    },
  },
})
</script>

<template>
  <main>
    <div v-if="companies.length > 0" class="row m-0 g-2 p-2">
      <div v-for="(company, index) in companies" :key="index">{{ company.name }}</div>
    </div>
    <p v-else>Loading companies...</p>
  </main>
</template>
