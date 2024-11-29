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
      spirits: [] as Array<any>, // Define the state for spirits
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
        this.spirits = await response.json()
      } catch (error) {
        console.error('Error fetching distilleries:', error)
      }
    },
  },
})
</script>

<template>
  <main>
    <div v-if="spirits.length > 0" class="row m-0 g-2 p-2">
      <Distillery v-for="(spirit, index) in spirits" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading spirits...</p>
  </main>
</template>
