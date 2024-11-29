<script lang="ts">
import { defineComponent } from 'vue'
import Distillery from '../components/Distillery.vue'

export default defineComponent({
  name: 'App',
  components: {
    Distillery,
  },
  data() {
    return {
      distilleries: [] as Array<any>, // Define the state for distilleries
    }
  },
  mounted() {
    this.fetchDistilleries()
  },
  methods: {
    async fetchDistilleries() {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            'https://api.fordsdevelopment.co.uk/distilleries'
          )}`
        )
        console.log(response)
        this.distilleries = await response.json()
      } catch (error) {
        console.error('Error fetching distilleries:', error)
      }
    },
  },
})
</script>

<template>
  <main>
    <div v-if="distilleries.length > 0" class="row m-0 g-2 p-2">
      <Distillery v-for="(spirit, index) in distilleries" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading distilleries...</p>
  </main>
</template>
